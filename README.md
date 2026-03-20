# PDF 도장/서명 삽입

PDF 파일에 투명 PNG 이미지(도장, 서명 등)를 삽입하여 새 PDF로 저장할 수 있는 웹앱입니다.

**설치 없이 바로 사용**: https://dalbom.github.io/pdf-signing

![사용 예시](screenshot.png)

## 기능

- PDF 파일 업로드 및 미리보기
- 투명 PNG 도장/서명 이미지 등록 (여러 개 가능)
- 드래그 앤 드롭으로 원하는 위치에 배치
- 도장 크기 조절 (슬라이더 + 코너 드래그)
- 페이지별 개별 배치 또는 전체 페이지 일괄 적용
- 수정된 PDF 다운로드
- 100% 브라우저에서 처리 (파일이 서버로 전송되지 않음)

## 사용 방법

https://dalbom.github.io/pdf-signing 에 접속하면 바로 사용할 수 있습니다.

### 로컬 실행 (선택)

```bash
# 아무 웹서버로 정적 파일 서빙
npx serve .
```

또는 더블클릭 실행:
- **macOS**: `PDF서명.command`
- **Windows**: `PDF서명.bat`

> **macOS 보안 경고**: **시스템 설정 > 개인정보 보호 및 보안**에서 **"그래도 열기"**를 클릭하세요.

## 기술 스택

- [PDF.js](https://mozilla.github.io/pdf.js/) - PDF 렌더링
- [pdf-lib](https://pdf-lib.js.org/) - PDF 편집 (브라우저에서 직접 실행)

## 라이선스

MIT
