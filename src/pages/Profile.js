import React from 'react';
import TopBar from '../components/TopBar';

const Profile = () => {
  return (
    <div className="pb-16 p-4">
      <TopBar />
      <h1 className="text-xl font-bold mt-4">Your Profile</h1>
      <div className="mt-8 flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-gray-200 mb-4"></div>
        <h2 className="font-bold">John Doe</h2>
        <p className="text-gray-500 text-sm">john@example.com</p>
      </div>
    </div>
  );
};

export default Profile;