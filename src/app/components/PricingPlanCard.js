// components/PricingPlanCard.js

import React from 'react';
import PropTypes from 'prop-types';

const PricingPlanCard = ({ planName, price, features, buttonLabel, onButtonClick }) => {
  return (
    <div className="max-w-sm mx-auto bg-black border rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-white">{planName}</h2>
        <p className="mt-4 text-whites text-3xl">
          <span className="text-4xl font-extrabold">${price}</span>/month
        </p>
        <ul className="mt-6 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-white">
              <svg
                className="w-5 h-5 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <button
          onClick={onButtonClick}
          className="mt-6 w-full bg-black border hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

PricingPlanCard.propTypes = {
  planName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonLabel: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default PricingPlanCard;
