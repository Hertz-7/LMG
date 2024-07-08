import React from 'react';
import './optioncard.css';

function OptionCard({ image, name }) {
  return (
  <div className="optioncard bg-black max-w-60 m-12 border-black border">
    <img src={image} alt='logo'/>
    <div className="bg-white w-full text-center text-black text-xl font-bold p-2 h-16 overflow-hidden">
      {name}
    </div>
  </div>
  
  );
}

export default OptionCard;
