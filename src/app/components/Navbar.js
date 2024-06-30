// components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar bg-black py-4 flex justify-between items-center px-4">
      <h1 className="text-white text-3xl font-bold italic p-7">PomoZen</h1>
      <div className="flex space-x-10 pr-20 text-xl">
        <button className="btn btn-primary">ZenPro</button>
        <button className="btn btn-secondary">Settings</button>
      </div>
    </nav>
  );
};

export default Navbar;
