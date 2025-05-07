import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaShoppingBag, FaBell, FaUser } from 'react-icons/fa';

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#0F172A] flex justify-around items-center py-3 rounded-t-3xl max-w-sm mx-auto">
      <NavLink 
        to="/" 
        className={({ isActive }) => `flex flex-col items-center text-xs font-semibold ${isActive ? 'text-white' : 'text-gray-400'}`}
      >
        <FaHome className={`text-lg ${window.location.pathname === '/' ? 'text-[#3B82F6]' : ''}`} />
        <span className="mt-1">Home</span>
      </NavLink>
      <NavLink 
        to="/bag" 
        className={({ isActive }) => `flex flex-col items-center text-xs font-semibold ${isActive ? 'text-white' : 'text-gray-400'}`}
      >
        <FaShoppingBag className="text-lg" />
        <span className="mt-1">Bag</span>
      </NavLink>
      <NavLink 
        to="/alerts" 
        className={({ isActive }) => `relative flex flex-col items-center text-xs font-semibold ${isActive ? 'text-white' : 'text-gray-400'}`}
      >
        <FaBell className="text-lg" />
        <span className="mt-1">Alerts</span>
        <span className="absolute -top-1 -right-2 bg-[#3B82F6] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
          1
        </span>
      </NavLink>
      <NavLink 
        to="/profile" 
        className={({ isActive }) => `flex flex-col items-center text-xs font-semibold ${isActive ? 'text-white' : 'text-gray-400'}`}
      >
        <FaUser className="text-lg" />
        <span className="mt-1">Profile</span>
      </NavLink>
    </nav>
  );
};

export default BottomNav;