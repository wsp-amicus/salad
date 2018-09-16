#!/bin/bash
# run this in server machine
sudo apt update;
sudo apt install nodejs;
sudo apt install npm;
nodejs -v;

# ssl field
sudo add-apt-repository ppa:certbot/certbot;
sudo apt-get update;
sudo apt-get install certbot;

# register ssl certificate
certbot certonly --manual
