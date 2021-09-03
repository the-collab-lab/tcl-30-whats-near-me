import React, { useContext } from 'react';

import ReactSlider from 'react-slider';
import { HeaderNav } from '../components/HeaderNav';
import { ReactComponent as WalkIcon } from '../assets/walk-icon.svg';
import { ReactComponent as CarIcon } from '../assets/car-icon.svg';
import { ReactComponent as BicycleIcon } from '../assets/bicycle-icon.svg';
import { LocationsContext } from '../context/LocationsContext';
import { MapCenterContext } from '../context/MapCenterContext';

export const SettingsPage = () => {
  const { wait, setWait } = useContext(LocationsContext);
  const { userLocationShared } = useContext(MapCenterContext);

  const handleChange = (value) => {
    setWait(value);
  };

  return (
    <>
      <HeaderNav />
      <div className="view__content">
        <h1 className="view__title">SETTINGS</h1>
        <div className="settings-subheader">
          {userLocationShared ? (
            <div className="settings__instructions">
              <p className="settings__instruction">
                Adjust how frequently the app refreshes with new information.
              </p>
              <br />
              <p className="settings__instruction">
                This is effective when you are actively sharing your location,
                and can improve battery life of your device.
              </p>
            </div>
          ) : (
            `Please share your location to adjust how frequently the app
            refreshes with new data`
          )}
        </div>

        {userLocationShared ? (
          <>
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
              <div className="slider__options">
                <div className="slider__transport">
                  <CarIcon />
                  <p className="slider__mode">Car / Train</p>
                </div>
                <div className="slider__transport">
                  <BicycleIcon />
                  <p className="slider__mode">Bicycle</p>
                </div>
                <div className="slider__transport">
                  <WalkIcon />
                  <p className="slider__mode">Walk</p>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};
