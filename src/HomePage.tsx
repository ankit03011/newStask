import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-300 via-blue-200 to-green-300">
      <div className="bg-white p-6 w-[600px] rounded-md shadow-lg">
        <div className="h-[50px] mt-4 mb-4 bg-gray-200 rounded-md flex justify-center items-center">
          <h2 className="text-gray-800 font-semibold">Welcome, This is done by Shubhi</h2>
        </div>
        <div className="h-[100px] bg-gray-800 rounded-md flex justify-center items-center">
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-2 rounded-md transition"
            onClick={() => navigate('/services/new')}
          >
            Go to Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
