// components/Navbar.js
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar bg-black py-4 flex justify-between items-center px-4">
      <Link href="/" legacyBehavior>
        <a className="inline-block">
          <h1 className="text-white text-3xl font-bold italic p-7 cursor-pointer">PomoZen</h1>
        </a>
      </Link>
      <div className="flex space-x-10 pr-20 font-bold text-lg">
        <Link href="/payment" legacyBehavior>
          <a className="inline-block">
            <p >ZenPro</p>
          </a>
        </Link>
        <Link href="/" legacyBehavior>
          <a className="inline-block">
            <p >Settings</p>
          </a>
        </Link>
        <Link href="/sign-in" legacyBehavior>
          <a className="inline-block">
            <p >Sign In</p>
          </a>
        </Link>
        <Link href="/sign-up" legacyBehavior>
          <a className="inline-block">
            <p >Sign Up</p>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
