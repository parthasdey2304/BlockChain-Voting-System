import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [name, setName] = useState('');
  const [voterId, setVoterId] = useState('');
  const [party, setParty] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/submit-vote', { name, voterId, party });
      alert('Vote submitted successfully');
      setName('');
      setVoterId('');
      setParty('');
      console.log(`Submitted vote for ${name} with voterId ${voterId} and party ${party}`);
    } catch (error) {
      console.error('Error submitting vote:', error);
    }
  };

  return (
    <div className='w-full h-screen flex justify-center items-center bg-gradient-to-tr from-blue-500 to-violet-700 p-2'>
      <div className='w-[450px] h-[800px] bg-white/30 rounded-xl p-4 flex pt-24'>
        <form onSubmit={handleSubmit} className='w-full h-[500px] flex-col space-y-5 font-["Poppins"] px-4'>
          <div className='w-full flex justify-center items-center text-center font-medium text-white text-3xl mb-10'>
            BlockChain Voting System
          </div>

          <div className='w-full flex justify-center items-center'>
            <input type="text" value={ name } onChange={(e) => {setName(e.target.value)}} className='w-full px-4 py-3 rounded-xl text-xl' placeholder='Name' />
          </div>

          <div className='w-full flex justify-center items-center'>
            <input type="number" value={ voterId } onChange={(e) => {setVoterId(e.target.value)}} className='w-full px-4 py-3 rounded-xl text-xl' placeholder='Voter ID' />
          </div>

          <div className='-mb-10'>
            <h1 className='text-2xl text-white font-medium mb-2 px-1'>Party : </h1>

            <div className='w-full h-[250px] flex-col space-y-2'>
              <div className='w-full h-[60px] px-4 py-2 bg-white/30 active:bg-blue-600 rounded-2xl flex space-x-2'>
                <input type="radio" name='party' value="Party A" id='party_a' onChange={(e) => {setParty(e.target.value)}} className='h-full' />
                <label for="party_a" className='text-white text-2xl  items-center pt-1.5 w-full'>Party A</label>
              </div>

              <div className='w-full h-[60px] px-4 py-2 bg-white/30 active:bg-blue-600 rounded-2xl flex space-x-2'>
                <input type="radio" name='party' value="Party B" id='party_b' onChange={(e) => {setParty(e.target.value)}} className='h-full' />
                <label for="party_b" className='text-white text-2xl  items-center pt-1.5 w-full'>Party B</label>
              </div>

              <div className='w-full h-[60px] px-4 py-2 bg-white/30 active:bg-blue-600 rounded-2xl flex space-x-2'>
                <input type="radio" name='party' value="Party C" id='party_c' onChange={(e) => {setParty(e.target.value)}} className='h-full' />
                <label for="party_c" className='text-white text-2xl  items-center pt-1.5 w-full'>Party C</label>
              </div>
            </div>
          </div>

          <input type='submit' className='w-full px-2 py-3 bg-blue-600 text-white rounded-2xl text-2xl -mt-10' />
        </form>
      </div>
    </div>
  );
};

export default App;
