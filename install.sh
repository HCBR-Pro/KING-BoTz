#!/usr/bin/bash

apt-get update -y
apt-get upgrade -y
apt-get install nodejs -y
apt-get install libwebp -y
apt-get install mc -y
apt-get install ffmpeg -y
apt-get install wget -y
apt-get install tesseract -y
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm i imgbb-uploader
npm install

echo "Inicie pelo node index.js .... Use o npm start apenas mais tarde para reconexão!"
