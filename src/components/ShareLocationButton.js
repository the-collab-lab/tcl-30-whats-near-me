import React, { useContext } from 'react';

import { MapCenterContext } from '../context/MapCenterContext';

const ShareLocationButton = () => {
  const valueCenterMap = useContext(MapCenterContext);
  const { setNewCenterMap } = valueCenterMap;

  const getLocation = (e) => {
    navigator.geolocation.getCurrentPosition(success, error);
  };

  function success(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const newMapCenter = { lat, lng };
    setNewCenterMap(newMapCenter);
    // TCL-30-40
    // 1. call navigator.geolocation.watchPosition()
    // 2. Update constantly the new center map position
  }

  function error() {
    // TCL30-42
    // 1. get new  center map (latitude, longitude) from Localstorage
    // 2. pass new center map (latitude, longitude) to setNewCenterMap
    const defaultCenterMap = {
      lat: 48.8566,
      lng: 2.3522,
    };
    setNewCenterMap(defaultCenterMap);

    // TCL-30-40
    // 3. Stop watching... navigator.geolocation.clearWatch()
    // Return to previous state
    // 4. get new  center map (latitude, longitude) from Localstorage
    // 5. pass new center map (latitude, longitude) to setNewCenterMap
  }

  return <button onClick={getLocation}>Share Location</button>;
};

export default ShareLocationButton;
