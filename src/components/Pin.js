import React from 'react';

const Pin = ({ imageUrl, title }) => (
  <div className="map-icon bounce">
    <img src={imageUrl} alt={title} />
    <svg viewBox="0 0 32 32" aria-labelledby="caret-icon">
      <title id="caret-icon">Caret Icon</title>
      <path fill="currentColor" d="M6,6 26,16 6,26z"></path>
    </svg>
  </div>
);

export default Pin;
