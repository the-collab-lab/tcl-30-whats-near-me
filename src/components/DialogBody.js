import React from 'react';

import CloseIcon from './CloseIcon';

const DialogBody = ({ locationDetails, onClick }) => (
  <>
    <button className="dialog__button" onClick={onClick}>
      <CloseIcon />
    </button>

    <div className="dialog__image">
      <img
        src={
          locationDetails?.thumbnail?.source ||
          `${process.env.PUBLIC_URL}/placeholder.png`
        }
        alt={locationDetails?.thumbnail?.source ? locationDetails.title : ''}
      />
    </div>
    <div className="dialog__body">
      <a
        className="dialog__body__link"
        href={`https://en.wikipedia.org/?curid=${locationDetails.pageid}`}
      >
        <h2>{locationDetails.title}</h2>
      </a>
      <p>{locationDetails.description}</p>
      <p>Distance: {locationDetails.coordinates[0].dist} km</p>
      <p></p>
    </div>
  </>
);

export default DialogBody;