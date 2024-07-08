import React from 'react';
import './banner.css';

function Banner({ title }) { // Accept a title prop
  return (
    <h1 className="bg-gradient-redblack artist-banner">
      {title} 
    </h1>
  );
}

export default Banner;
