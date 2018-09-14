#!/bin/bash
USERNAME=wsp
HOSTS="wsp.thitgorn.com"
SCRIPT="git clone https://github.com/wsp-amicus/salad.git;
cd salad;
ls;"
ssh -l ${USERNAME} ${HOSTS} "${SCRIPT}"

