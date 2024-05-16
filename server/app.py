from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/submit-vote', methods=['POST', 'OPTIONS'])
def submit_vote():
    if request.method == 'OPTIONS':
        response = app.make_default_options_response()
        response.headers['Access-Control-Allow-Origin'] = 'http://localhost:5173'
        response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
        return response

    data = request.json
    print(data)
    return jsonify({'message': 'Vote submitted successfully'})

@app.route('/vote-counts', methods=['GET', 'OPTIONS'])
def get_vote_counts():
    if request.method == 'OPTIONS':
        response = app.make_default_options_response()
        response.headers['Access-Control-Allow-Origin'] = 'http://localhost:5173'
        return response
    
    return jsonify({'party_a': 10, 'party_b': 15, 'party_c': 8})

if __name__ == '__main__':
    app.run(debug=True)
