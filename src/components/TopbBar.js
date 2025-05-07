import React from 'react';
import { FaThLarge, FaSearch } from 'react-icons/fa';

const TopBar = ({ showMenu, setShowMenu }) => {
  return (
    <header className="flex items-center justify-between mb-4 p-4">
      <button 
        aria-label="Grid menu" 
        className="p-2 border border-gray-300 rounded-lg text-gray-700"
        onClick={() => setShowMenu(!showMenu)}
      >
        <FaThLarge className="text-base" />
      </button>
      <h1 className="font-semibold text-lg text-gray-900">
        {showMenu ? 'Menu' : 'Explore'}
      </h1>
      <button aria-label="Search" className="p-2 border border-gray-300 rounded-lg text-gray-700">
        <FaSearch className="text-base" />
      </button>
    </header>
  );
};

export default TopBar;