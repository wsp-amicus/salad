#!/bin/bash
# run this in server machine
sudo apt update;
sudo apt install nodejs;
sudo apt install npm;
nodejs -v;

# mongodb
sudo apt update;
sudo apt install -y mongodb;
sudo systemctl start mongodb;

# ssl field
sudo add-apt-repository ppa:certbot/certbot;
sudo apt-get update;
sudo apt-get install certbot;

# register ssl certificate
sudo certbot certonly --manual
