import React, { useContext } from 'react';

import ReactSlider from 'react-slider';

import { LocationsContext } from '../context/LocationsContext';

const Settings = () => {
  const { wait, setWait } = useContext(LocationsContext);

  const handleChange = (value) => {
    setWait(value);
  };

  return (
    <>
      <div className="settings">
        <h3 className="settings__title">
          Adjust how frequently the map will refresh with new locations
        </h3>
        <p className="settings__explanation">
          Recommended settings are based on expected speed of transportation
        </p>
        <ul className="settings__options">
          <li>- Car/Train: 0 seconds</li>
          <li>- Bicycle: 15 seconds</li>
          <li>- Walking: 30 seconds</li>
        </ul>
      </div>
      <div className="view__content">
        <div className="slider-container">
          <ReactSlider
            className="slider"
            thumbClassName="thumb"
            trackClassName="track"
            min={0}
            max={30}
            step={5}
            value={wait}
            onChange={handleChange}
            renderThumb={(props, state) => (
              <div {...props}>{state.valueNow}</div>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default Settings;
