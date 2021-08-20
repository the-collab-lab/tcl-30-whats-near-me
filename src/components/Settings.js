import React, { useContext } from 'react';

import ReactSlider from 'react-slider';

import { LocationsContext } from '../context/LocationsContext';
import { MapCenterContext } from '../context/MapCenterContext';

const Settings = () => {
  const { wait, setWait } = useContext(LocationsContext);
  const { userLocationShared } = useContext(MapCenterContext);

  const handleChange = (value) => {
    setWait(value);
  };

  return (
    <>
      <div>
        <h1>Settings </h1>
        <p className="settings-subheader">
          {userLocationShared
            ? `Adjust how frequently the app
          refreshes with new data`
            : `Please share your location to adjust how frequently the app
          refreshes with new data`}
        </p>
      </div>
      {userLocationShared ? (
        <>
          <div className="view__content">
            <div className="slider-container">
              <ReactSlider
                className="slider"
                thumbClassName="thumb"
                trackClassName="track"
                ariaLabel={['Thumb']}
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

            <p className="slider__instructions">
              Recommended settings are based on expected speed of transportation
            </p>
            <ul className="slider__legend">
              <li>Car/Train: 0 seconds</li>
              <li>Bicycle: 15 seconds</li>
              <li>Walking: 30 seconds</li>
            </ul>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Settings;
