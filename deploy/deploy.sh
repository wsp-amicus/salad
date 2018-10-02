#!/bin/bash
USERNAME=wsp
HOSTS="wsp2.thitgorn.com"
SCRIPT="
echo '${USERNAME}: cd salad';
cd salad;
echo '${USERNAME}: git pull';
git pull;
echo '${USERNAME}: npm install';
npm install;
echo '${USERNAME}: kill old process, sudo kill \$(sudo lsof -t -i :5555 & 5556)';
sudo kill \$(sudo lsof -t -i :5555);
sudo kill \$(sudo lsof -t -i :5556);
echo '${USERNAME}: building production file'
npm run build;
echo '${USERNAME}: Server is started CTRL + C to leave';
PORT=5555 NODE_ENV='production' node server/app.js;
"

echo "you are about to deploy app to ${USERNAME}@${HOSTS}"
ssh -p 2920 -l ${USERNAME} ${HOSTS} "${SCRIPT}"

