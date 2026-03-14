const express = require('express');
const multer = require('multer');
const path = require('path');
const { PDFDocument } = require('pdf-lib');

const app = express();
const PORT = process.env.PORT || 3000;

// Multer: store files in memory
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 50 * 1024 * 1024 } // 50MB limit
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API: Save PDF with stamps
app.post('/api/save', upload.any(), async (req, res) => {
  try {
    // Get the PDF file
    const pdfFile = req.files.find(f => f.fieldname === 'pdf');
    if (!pdfFile) {
      return res.status(400).send('PDF file is required');
    }

    // Parse placements
    const placements = JSON.parse(req.body.placements);
    if (!placements || placements.length === 0) {
      return res.status(400).send('No stamp placements provided');
    }

    // Load the PDF
    const pdfDoc = await PDFDocument.load(pdfFile.buffer);
    const pages = pdfDoc.getPages();

    // Build stamp image map
    const stampImages = {};
    for (const file of req.files) {
      if (file.fieldname.startsWith('stamp_')) {
        const stampId = parseInt(file.fieldname.replace('stamp_', ''));
        // Detect image type
        const isPng = file.mimetype === 'image/png' ||
                      file.originalname.endsWith('.png');
        if (isPng) {
          stampImages[stampId] = await pdfDoc.embedPng(file.buffer);
        } else {
          stampImages[stampId] = await pdfDoc.embedJpg(file.buffer);
        }
      }
    }

    // Apply placements
    for (const placement of placements) {
      const pageIndex = placement.page - 1;
      if (pageIndex < 0 || pageIndex >= pages.length) continue;

      const page = pages[pageIndex];
      const stampImage = stampImages[placement.stampId];
      if (!stampImage) continue;

      page.drawImage(stampImage, {
        x: placement.x,
        y: placement.y,
        width: placement.width,
        height: placement.height,
      });
    }

    // Save and send
    const modifiedPdfBytes = await pdfDoc.save();

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="signed.pdf"',
      'Content-Length': modifiedPdfBytes.length,
    });

    res.send(Buffer.from(modifiedPdfBytes));
  } catch (err) {
    console.error('Error processing PDF:', err);
    res.status(500).send('Failed to process PDF: ' + err.message);
  }
});

app.listen(PORT, () => {
  console.log(`PDF Signing app running at http://localhost:${PORT}`);
});
