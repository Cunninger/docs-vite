@echo off
chcp 65001
REM 添加所有改动到暂存区
git add .

REM 提交改动
git commit -m "add: Github 贡献表"

REM 推送改动到远程仓库
git push origin main


