echo -e "\e[32m[INFO] Installing the Dependencies..\e[0m"
cd client
npm i
if [ $? -ne 0 ]; then
    echo -e "\e[31m[INFO] Failed to Install Dependencies\e[0m"
    exit 1
fi
cd ../server
pip install flask blockchain Flask-CORS
if [ $? -ne 0 ]; then
    echo -e "\e[31m[INFO] Failed to Install Dependencies\e[0m"
    exit 1
fi
echo -e "\e[32m[INFO] Dependencies Installed!\e[0m"
