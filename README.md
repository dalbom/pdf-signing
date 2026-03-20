# PDF 도장/서명 삽입

PDF 파일에 투명 PNG 이미지(도장, 서명 등)를 삽입하여 새 PDF로 저장할 수 있는 웹앱입니다.

![사용 예시](screenshot.png)

## 기능

- PDF 파일 업로드 및 미리보기
- 투명 PNG 도장/서명 이미지 등록 (여러 개 가능)
- 드래그 앤 드롭으로 원하는 위치에 배치
- 도장 크기 조절 (슬라이더 + 코너 드래그)
- 페이지별 개별 배치 또는 전체 페이지 일괄 적용
- 수정된 PDF 다운로드

## 실행 방법

### CLI

```bash
npm install
npm start
```

`http://localhost:3000` 에서 실행됩니다.

### 더블클릭 실행

- **macOS**: `PDF서명.command` 더블클릭
- **Windows**: `PDF서명.bat` 더블클릭

브라우저가 자동으로 열립니다.

> **macOS 보안 경고 해결**: 처음 실행 시 "malware" 경고가 나올 수 있습니다.
> **시스템 설정 > 개인정보 보호 및 보안** 으로 이동하면 차단된 파일에 대한 **"그래도 열기"** 버튼이 표시됩니다. 허용 후 정상 실행됩니다.
> 또는 터미널에서 `xattr -d com.apple.quarantine PDF서명.command` 실행 후 더블클릭하세요.

## 기술 스택

- **Frontend**: Vanilla JS, [PDF.js](https://mozilla.github.io/pdf.js/)
- **Backend**: Node.js, Express
- **PDF 처리**: [pdf-lib](https://pdf-lib.js.org/)

## 라이선스

MIT
