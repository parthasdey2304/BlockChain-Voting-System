echo  "\e[32m[INFO] Installing the Dependencies.."
cd client
npm i
cd ..
cd server
pip install flask blockchain
echo "\e[32m[INFO] Dependencies Installed!"