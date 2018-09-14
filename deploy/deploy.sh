#!/bin/bash
USERNAME=wsp
HOSTS="wsp.thitgorn.com"
SCRIPT="
cd salad;
git pull;
npm install;
sudo kill \$(sudo lsof -t -i :80);
npm run build;
node server/app.js PORT=5555;
echo 'Server is started CTRL + C to leave'"
ssh -l ${USERNAME} ${HOSTS} "${SCRIPT}"

