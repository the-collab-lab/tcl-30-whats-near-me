import React, { useContext } from 'react';

import { MapCenterContext } from '../context/MapCenterContext';

const ShareLocationButton = () => {
  const valueCenterMap = useContext(MapCenterContext);
  const { setNewCenterMap } = valueCenterMap;

  let id;
  const getLocation = (e) => {
    id = navigator.geolocation.watchPosition(success, error);
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
    navigator.geolocation.getCurrentPosition(success, error);
    navigator.geolocation.clearWatch(id);
  }

  return <button onClick={getLocation}>Share Location</button>;
};

export default ShareLocationButton;
