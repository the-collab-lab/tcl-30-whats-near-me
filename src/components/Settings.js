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
          <p>Set how frequently the app fetches new places</p>
        </div>
      </div>
    </>
  );
};

export default Settings;
