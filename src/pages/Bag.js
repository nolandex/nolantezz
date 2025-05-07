import React from 'react';
import TopBar from '../components/TopBar';

const Bag = () => {
  return (
    <div className="pb-16 p-4">
      <TopBar />
      <h1 className="text-xl font-bold mt-4">Your Bag</h1>
      <p className="mt-8 text-center text-gray-500">Your bag is empty</p>
    </div>
  );
};

export default Bag;