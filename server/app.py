# Import necessary modules
from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import sqlite3

# Initialize Flask app and enable CORS
app = Flask(__name__)
CORS(app)

# SQLite database initialization
os.system("mkdir databases")
os.system("touch databases/votes.db")
conn = sqlite3.connect('databases/votes.db')
c = conn.cursor()
c.execute('''CREATE TABLE IF NOT EXISTS votes
             (name TEXT, voter_id INTEGER, party TEXT)''')
conn.commit()
conn.close()

# Route for submitting a vote
@app.route('/submit-vote', methods=['POST', 'OPTIONS'])
def submit_vote():
    if request.method == 'OPTIONS':
        response = app.make_default_options_response()
        response.headers['Access-Control-Allow-Origin'] = 'http://localhost:5173'
        response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
        return response

    # Extract data from the request
    data = request.json
    name = data.get('name')
    voter_id = data.get('voterId')
    party = data.get('party')

    # Store vote data in the SQLite database
    conn = sqlite3.connect('databases/votes.db')
    c = conn.cursor()
    c.execute("INSERT INTO votes (name, voter_id, party) VALUES (?, ?, ?)", (name, voter_id, party))
    conn.commit()
    conn.close()

    return jsonify({'message': 'Vote submitted successfully'})

# Route for retrieving vote counts
@app.route('/vote-counts', methods=['GET', 'OPTIONS'])
def get_vote_counts():
    if request.method == 'OPTIONS':
        response = app.make_default_options_response()
        response.headers['Access-Control-Allow-Origin'] = 'http://localhost:5173'
        return response
    
    # Retrieve vote counts from the SQLite database
    conn = sqlite3.connect('databases/votes.db')
    c = conn.cursor()
    c.execute("SELECT party, COUNT(*) FROM votes GROUP BY party")
    vote_counts = dict(c.fetchall())
    conn.close()

    return jsonify(vote_counts)

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
