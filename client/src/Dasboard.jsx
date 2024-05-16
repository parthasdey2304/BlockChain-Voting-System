import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [voteCounts, setVoteCounts] = useState({});

  useEffect(() => {
    const fetchVoteCounts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/vote-counts');
        setVoteCounts(response.data);
      } catch (error) {
        console.error('Error fetching vote counts:', error);
      }
    };

    fetchVoteCounts();
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center">

      <div className='w-[450px] h-[800px] bg-white/30 rounded-xl p-4 flex-col pt-24 relative'>
      <Link to="/" className='px-3 py-2 rounded-full bg-violet-600 absolute top-0 left-2 font-["Poppins"] text-white text-xl'>
        <i class="ri-arrow-left-line text-white"></i>
      </Link>
        <h1 className="text-3xl font-semibold mb-4">Vote Counts</h1>
        <div className="grid grid-cols-3 gap-4">
            {Object.keys(voteCounts).map(party => (
            <div key={party} className="bg-blue-200 p-4 rounded-lg">
                <h2 className="text-xl font-medium mb-2">{party}</h2>
                <p className="text-lg">{voteCounts[party]}</p>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
