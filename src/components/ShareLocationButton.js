import React, { useContext } from 'react';

import { MapCenterContext } from '../context/MapCenterContext';

const ShareLocationButton = () => {
  const valueCenterMap = useContext(MapCenterContext);
  const { setNewCenterMap, setLocationShared } = valueCenterMap;

  let id;
  const getLocation = (e) => {
    id = navigator.geolocation.watchPosition(success, error);
  };

  function success(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const newMapCenter = { lat, lng };
    setNewCenterMap(newMapCenter);
    setLocationShared('yes');
  }

  function error() {
    setLocationShared('no');

    const defaultCenterMap = {
      lat: 48.8566,
      lng: 2.3522,
    };

    if (navigator?.geolocation) {
      navigator?.geolocation?.getCurrentPosition(success, error);
      navigator?.geolocation?.clearWatch(id);
    } else {
      setNewCenterMap(defaultCenterMap);
    }
  }

  return <button onClick={getLocation}>Share Location</button>;
};

export default ShareLocationButton;
