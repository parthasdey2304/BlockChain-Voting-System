#!/bin/bash

run_server() {
    python server/app.py &
}

run_client() {
    cd client
    npm run dev &
}

open_browser() {
    xdg-open "http://localhost:5173/"
}

# Running the server and client in seperate processes parallel
run_server
run_client

sleep 2

open_browser