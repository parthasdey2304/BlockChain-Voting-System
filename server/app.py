# server.py
from flask import Flask, request, jsonify
import blockchain

app = Flask(__name__)

# Route for receiving and processing the vote data
@app.route('/submit-vote', methods=['POST'])
def submit_vote():
    data = request.json
    # Assuming you have a function to add the vote to the blockchain
    # blockchain.add_vote(data['name'], data['voter_id'], data['party'])
    response = jsonify({'message': 'Vote submitted successfully'})
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:5173')
    return response

# Route for fetching vote counts for each party
@app.route('/vote-counts', methods=['GET'])
def get_vote_counts():
    counts = blockchain.get_vote_counts()
    response = jsonify(counts)
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:5173')
    return response

if __name__ == '__main__':
    app.run(debug=True)
