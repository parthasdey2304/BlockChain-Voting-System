#!/bin/bash

run_server() {
    source server/.env/bin/activate
    python server/app.py &
}

run_client() {
    cd client
    npm run dev &
}

open_browser() {
    xdg-open "http://localhost:5173/"
}

# Run server-side and client-side apps in parallel
run_server
run_client

sleep 2

open_browser