import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Bag from './pages/Bag';
import Alerts from './pages/Alerts';
import Profile from './pages/Profile';
import BottomNav from './components/BottomNav';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Router>
      <div className="bg-white min-h-screen flex flex-col justify-between max-w-sm mx-auto">
        <Routes>
          <Route path="/" element={<Home showMenu={showMenu} setShowMenu={setShowMenu} />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;