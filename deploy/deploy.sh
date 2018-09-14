#!/bin/bash
USERNAME=wsp
HOSTS="wsp.thitgorn.com"
SCRIPT="
cd salad;
git pull;
npm install;
sudo kill \$(sudo lsof -t -i :5555);
npm run build;
echo 'Server is started CTRL + C to leave';
PORT=5555 node server/app.js; \n"
ssh -l ${USERNAME} ${HOSTS} "${SCRIPT}"

