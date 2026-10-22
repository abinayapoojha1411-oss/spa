@echo off
setlocal
echo ========================================================
echo  Glow & Grace Salon - Push to GitHub
echo  Target: https://github.com/abinayapoojha1411-oss/spa.git
echo ========================================================
echo.
set "PATH=%LOCALAPPDATA%\MinGit\cmd;%PATH%"

echo Checking Git status...
git status
echo.

set /p TOKEN="Please enter your GitHub Personal Access Token (PAT): "

if "%TOKEN%"=="" (
    echo.
    echo No token entered. Attempting standard git push...
    git push -u origin main
) else (
    echo.
    echo Pushing to GitHub with provided credentials...
    git push -u https://abinayapoojha1411-oss:%TOKEN%@github.com/abinayapoojha1411-oss/spa.git main
)

echo.
if %ERRORLEVEL% equ 0 (
    echo ========================================================
    echo  SUCCESS: Project successfully pushed to GitHub!
    echo  Visit: https://github.com/abinayapoojha1411-oss/spa
    echo ========================================================
) else (
    echo ========================================================
    echo  Push failed. Please ensure your GitHub token has the
    echo  'repo' scope enabled.
    echo ========================================================
)
echo.
pause
