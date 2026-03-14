@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo PDF 도장/서명 앱을 시작합니다...
echo 브라우저에서 http://localhost:3000 을 열어주세요
echo 종료하려면 이 창을 닫으세요
echo.
start http://localhost:3000
node server.js
