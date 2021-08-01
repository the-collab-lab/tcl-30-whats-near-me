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
  }

  function error() {
    const defaultCenterMap = {
      lat: 48.8566,
      lng: 2.3522,
    };
    setNewCenterMap(defaultCenterMap);
  }

  return <button onClick={getLocation}>Share Location</button>;
};

export default ShareLocationButton;
