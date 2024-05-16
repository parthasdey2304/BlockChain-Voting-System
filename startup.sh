#!/bin/bash

# Function to run flask-api
run_server() {
    python server/app.py &
}

# Function to run the react client app
run_client() {
    cd client
    npm run dev &
}

# Function to open browser
open_browser() {
    xdg-open "http://localhost:5173/"
}

# Run server-side and client-side apps in parallel
run_server
run_client

# Wait for a few seconds before opening the browser
sleep 2

# Open the browser
open_browser