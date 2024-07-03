// components/InformationSection.js

import React from 'react';
import Link from 'next/link'

const InformationSection = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-2">
          <div className="p-4 mt-24">
            <h1 className ="text-6xl font-bold">Focus and Flourish
            Master Your Time with PomoZen</h1>
            <p className ="mt-8">Conquer your to-do list and achieve laser focus with PomoZen. <br/> Unlock peak productivity.</p>
            <Link href="/timerapp" legacyBehavior>
              <a className="inline-block text-xl border font-bold text-white bg-black hover:bg-white hover:text-black py-4 px-8 rounded mt-8 sm:mt-4">
                Go to App
              </a>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 p-2">
          <div className=" p-4">ADD INFOGRAPHIC HERE</div>
        </div>
      </div>
    </div>  );
};

export default InformationSection;
