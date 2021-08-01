import React, { useContext } from 'react';

import { MapCenterContext } from '../context/MapCenterContext';

const ShareLocationButton = () => {
  const valueCenterMap = useContext(MapCenterContext);
  const { setNewCenterMap } = valueCenterMap;

  let id;
  const getLocation = (e) => {
    // TCL-30-40
    // 1. call navigator.geolocation.watchPosition()
    id = navigator.geolocation.watchPosition(success, error);
  };

  function success(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const newMapCenter = { lat, lng };
    setNewCenterMap(newMapCenter);
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
    // Return to previous state
    // 3. get new  center map (latitude, longitude) from current position
    navigator.geolocation.getCurrentPosition(success, error);
    // 4. Stop watching... navigator.geolocation.clearWatch()
    navigator.geolocation.clearWatch(id);
  }

  return <button onClick={getLocation}>Share Location</button>;
};

export default ShareLocationButton;
