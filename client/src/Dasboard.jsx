// dashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [voteCounts, setVoteCounts] = useState({});

  useEffect(() => {
    const fetchVoteCounts = async () => {
      try {
        const response = await axios.get('/vote-counts');
        setVoteCounts(response.data);
      } catch (error) {
        console.error('Error fetching vote counts:', error);
      }
    };

    fetchVoteCounts();
  }, []);

  return (
    <div>
      <h1>Vote Counts</h1>
      <ul>
        {Object.entries(voteCounts).map(([party, count]) => (
          <li key={party}>
            {party}: {count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
