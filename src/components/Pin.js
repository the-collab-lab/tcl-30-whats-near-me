import React from 'react';

const Pin = ({ imageUrl, alt, onClick }) => (
  <div
    className="map-icon bounce"
    onKeyPress={onClick}
    role="button"
    tabIndex="0"
  >
    <img src={imageUrl} alt={alt} />
    <svg viewBox="0 0 32 32" aria-labelledby="caret-icon">
      <title id="caret-icon">Caret Icon</title>
      <path fill="currentColor" d="M6,6 26,16 6,26z"></path>
    </svg>
  </div>
);

export default Pin;
