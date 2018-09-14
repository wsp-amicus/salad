#!/bin/bash
USERNAME=wsp
HOSTS="wsp.thitgorn.com"
SCRIPT="cd salad;
git pull;
npm install;
npm run build;
serve -s build;
npm run backend-prod;"
ssh -l ${USERNAME} ${HOSTS} "${SCRIPT}"

