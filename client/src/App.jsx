// app.jsx
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [name, setName] = useState('');
  const [voterId, setVoterId] = useState('');
  const [party, setParty] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/submit-vote', { name, voterId, party });
      alert('Vote submitted successfully');
      setName('');
      setVoterId('');
      setParty('');
    } catch (error) {
      console.error('Error submitting vote:', error);
    }
  };

  return (
    <div>
      <h1>Blockchain Voting System</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Voter ID:
          <input type="text" value={voterId} onChange={(e) => setVoterId(e.target.value)} />
        </label>
        <br />
        <label>
          Party:
          <input type="radio" name="party" value="Party A" onChange={() => setParty('Party A')} /> Party A
          <input type="radio" name="party" value="Party B" onChange={() => setParty('Party B')} /> Party B
          <input type="radio" name="party" value="Party C" onChange={() => setParty('Party C')} /> Party C
          <input type="radio" name="party" value="No one" onChange={() => setParty('No one')} /> No one
        </label>
        <br />
        <button type="submit">Submit Vote</button>
      </form>
    </div>
  );
};

export default App;
