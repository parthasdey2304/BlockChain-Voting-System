#!/bin/bash

echo -e "\e[32m[INFO] Installing the Dependencies..\e[0m"

# Installing npm dependencies
cd client
npm i
if [ $? -ne 0 ]; then
    echo -e "\e[31m[INFO] Failed to Install Dependencies\e[0m"
    exit 1
fi

# Installing pip dependencies
cd ../server
pip install flask Flask-CORS
if [ $? -ne 0 ]; then
    echo -e "\e[31m[INFO] Failed to Install Dependencies\e[0m"
    exit 1
fi
echo -e "\e[32m[INFO] Dependencies Installed!\e[0m"

# Starting the Blockchain Server
cd ..
echo -e "\e[34m[INFO] Starting the Blockchain Server..\e[0m"
chmod +x startup.sh
./startup.sh