import React from 'react';
import './artistcard.css';


function ArtistCard({ image, name }) {
  return (
    <div className="artist-card mx-10 my-4">
      <img src={image} alt='Justin Timberlake' className="artist-image" />
      <div className="bg-gradient-redblack artist-name">{name}</div>
    </div>
  );
}

export default ArtistCard;
