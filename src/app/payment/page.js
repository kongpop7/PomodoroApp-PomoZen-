'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import PricingPlanCard from '../components/PricingPlanCard'
import { PackagesComponent } from '../components/PackagesComponent'


const payment = () => {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  const features = [
    'Feature 1',
    'Feature 2',
    'Feature 3',
    'Feature 4',
  ];

  return (
    <div>
      <Navbar />
      {/* <div className='text-5xl font-bold flex  justify-center mt-8'>
        <h1>Select Your Plan</h1>
      </div> */}
      <div className="">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 mt-8">
            {/* <PricingPlanCard
              planName="Basic Plan"
              price={1.99}
              features={features}
              buttonLabel="Choose Plan"
              onButtonClick={handleButtonClick}
            />
            <PricingPlanCard
              planName="Pro Plan"
              price={4.99}
              features={features}
              buttonLabel="Choose Plan"
              onButtonClick={handleButtonClick}
            />
            <PricingPlanCard
              planName="Enterprise Plan"
              price={9.99}
              features={features}
              buttonLabel="Choose Plan"
              onButtonClick={handleButtonClick}
            /> */}
            <PackagesComponent/>
          </div>
        </div>
    </div>
  )
}

export default payment
