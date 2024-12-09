import React from 'react';
import fbIcon from '../../assets/facebook white.png';  // Ensure correct path and file name
import igIcon from '../../assets/INSTA WHITE.png';    // Ensure correct path and file name
import liIcon from '../../assets/LINKEDIN WHITE.png'; // Ensure correct path and file name
import mailIcon from '../../assets/MAIL WHITE.png';   // Ensure correct path and file name

function Footerlmg() {
  return (
    <div className="bg-gradient-redblack-top text-white flex flex-col items-center justify-center p-4 space-y-4">
      <div className="flex space-x-3 mb-4 md:mb-0">
        <a href="https://facebook.com" className="hover:text-gray-200">
          <img src={fbIcon} alt="Facebook" className="md:h-16 md:w-16  h-8 w-8" />
        </a>
        <a href="https://www.linkedin.com/company/love-music-tours" className="hover:text-gray-200">
          <img src={liIcon} alt="LinkedIn" className="md:h-16 md:w-16 h-8 w-8" />
        </a>
        <a href="https://www.instagram.com/lovemusicglobal_official/" className="hover:text-gray-200">
          <img src={igIcon} alt="Instagram" className="md:h-16 md:w-16 h-8 w-8" />
        </a>
        <a href="mailto:contactus@lovemusicglobal.com" className="hover:text-gray-200">
          <img src={mailIcon} alt="Email" className="md:h-16 md:w-16 h-8 w-8" />
        </a>
      </div>

      {/* Horizontal Line */}
      <div className="w-1/3 border-t border-white opacity-50"></div>

      <div className="text-center md:text-sm text-xs">
        Copyright © LMG, All Rights Reserved
      </div>
    </div>
  );
}

export default Footerlmg;
