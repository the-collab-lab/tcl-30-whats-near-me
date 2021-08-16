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
      <h1>Settings</h1>
      <div className="view__content">
        <div className="slider-container">
          <h3>
            Adjust how frequently the map will refresh with new locations.
          </h3>

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
          <p>
            Recommended settings are based on expected speed of transportation:
          </p>
          <ul>
            <li>- Car or Train: 0 seconds</li>
            <li>- Bicycle: 15 seconds</li>
            <li>- Walking: 30 seconds</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Settings;
