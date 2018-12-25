#!/bin/bash
source .env

cd $BACKEND_FOLDER

sudo chmod -R 777 src
sudo chmod -R 777 config
sudo chmod -R 777 public
sudo chmod -R 777 var