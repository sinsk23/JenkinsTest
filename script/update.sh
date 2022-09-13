#!/bin/sh
ssh ubuntu@3.35.8.87<<EOF
sudo -s
git pull origin main
npm install
pm2 restart app.js
exit
EOF