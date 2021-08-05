import React, { useContext } from 'react';

import { NavLink } from 'react-router-dom';
import { MapCenterContext } from '../context/MapCenterContext';

const Nav = () => {
  const valueCenterMap = useContext(MapCenterContext);
  const {
    defaultCenterMap,
    setUserCenterMap,
    setUserLocationShared,
    setNewCenterMap,
  } = valueCenterMap;

  const handleSuccess = (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const newMapCenter = { lat, lng };
    setNewCenterMap(newMapCenter);
    setUserCenterMap(newMapCenter);
  };
  const handleError = () => setUserCenterMap(defaultCenterMap);

  const handleFlyToMe = () => {
    if (navigator?.geolocation) {
      navigator?.geolocation?.getCurrentPosition(handleSuccess, handleError);
      setUserLocationShared('yes');
    }
  };

  return (
    <footer>
      <nav>
        <ul className="nav">
          <li>
            <NavLink exact to="/">
              Map
            </NavLink>
          </li>
          <li>
            <NavLink to="/list">List</NavLink>
          </li>
          <li>
            <NavLink to="/settings">Settings</NavLink>
          </li>
          <li>
            <NavLink to="/help">Help</NavLink>
          </li>
          <li>
            <button onClick={handleFlyToMe}>Fly to me</button>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Nav;
