import React from 'react';
import TopBar from '../components/TopBar';

const Alerts = () => {
  return (
    <div className="pb-16 p-4">
      <TopBar />
      <h1 className="text-xl font-bold mt-4">Alerts</h1>
      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
        <p className="font-semibold">50% Discount</p>
        <p className="text-sm text-gray-600">Flat 50% discount on your first order</p>
      </div>
    </div>
  );
};

export default Alerts;