import React from 'react';
import fbIcon from '../../assets/facebook white.png';  // Ensure correct path and file name
import igIcon from '../../assets/INSTA WHITE.png';    // Ensure correct path and file name
import liIcon from '../../assets/LINKEDIN WHITE.png'; // Ensure correct path and file name
import mailIcon from '../../assets/MAIL WHITE.png';   // Ensure correct path and file name

function Footerlmg() {
  return (
    <div className="bg-red-700 text-white flex flex-col items-center justify-center p-4 space-y-4">
      <div className="flex space-x-3 mb-4 md:mb-0">
        <a href="https://facebook.com" className="hover:text-gray-200">
          <img src={fbIcon} alt="Facebook" className="h-16 w-16" />
        </a>
        <a href="https://linkedin.com" className="hover:text-gray-200">
          <img src={liIcon} alt="LinkedIn" className="h-16 w-16" />
        </a>
        <a href="https://instagram.com" className="hover:text-gray-200">
          <img src={igIcon} alt="Instagram" className="h-16 w-16" />
        </a>
        <a href="mailto:info@example.com" className="hover:text-gray-200">
          <img src={mailIcon} alt="Email" className="h-16 w-16" />
        </a>
      </div>

      {/* Horizontal Line */}
      <div className="w-1/3 border-t border-white opacity-50"></div>

      <div className="text-center text-sm">
        Copyright © LMG, All Rights Reserved
      </div>
    </div>
  );
}

export default Footerlmg;
