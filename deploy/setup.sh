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

# $[HTTP]
# sudo iptables -t nat -I OUTPUT -p tcp -d 127.0.0.1 --dport 80 -j REDIRECT --to-ports 5555
# sudo iptables -t nat -I PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 5555
# $[HTTPS]
# sudo iptables -t nat -I OUTPUT -p tcp -d 127.0.0.1 --dport 443 -j REDIRECT --to-ports 5556
# sudo iptables -t nat -I PREROUTING -p tcp --dport 443 -j REDIRECT --to-ports 5556