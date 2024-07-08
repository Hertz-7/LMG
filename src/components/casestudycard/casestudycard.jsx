import React from 'react';
import '../artistcard/artistcard.css';
import './casestudycard.css';

function CaseCard({ image, name }) {
  return (
    <div className="casecard bg-gradient-redblack m-6 text-wrap text-center">
      <img className='' src={image} alt='logo'/>
      <div className="bg-gradient-redblack w-full text-center text-white font-bold p-2 h-24 text-base md:text-xl flex items-center justify-center">
        {name}
      </div>
    </div>
  );
}

export default CaseCard;
