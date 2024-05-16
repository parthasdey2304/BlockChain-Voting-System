#!/bin/bash

# Function to run server-side app
run_server() {
    python server/app.py &
}

# Function to run client-side app
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
sleep 5

# Open the browser
open_browser

# End of script
