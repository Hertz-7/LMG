import React from 'react';

function InfoCard({ title, text }) {
  return (
    <>
    <div className='flex flex-col border-1 border-solid  border-white '>
        <div className="bg-gradient-redblack p-4 text-center">
        <h2 className="text-white font-bold mb-2">{title}</h2>
        </div>
        <div className="bg-black align-middle justify-center p-4 min-h-72 text-center ">
        <p className="text-white text-xl ">{text}</p>
        </div>
    </div>
    </>
  );
}

export default InfoCard;
