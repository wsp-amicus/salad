#!/bin/bash
USERNAME=wsp
HOSTS="wsp.thitgorn.com"
SCRIPT="
cd salad;
git pull;
npm install;
kill \$(lsof -t -i :5000);
sudo kill \$(sudo lsof -t -i :80);
npm run build;
sudo serve -l 80 -s build/ & npm run backend-prod;
echo 'Server is started CTRL + C to leave'"
ssh -l ${USERNAME} ${HOSTS} "${SCRIPT}"

