import React, { createContext, useState } from 'react';
export const MapCenterContext = createContext();

const MapCenter = ({ children }) => {
  const defaultCenterMap = {
    lat: 48.8566,
    lng: 2.3522,
  };

  const [newCenterMap, setNewCenterMap] = useState(defaultCenterMap);
  const [userCenterMap, setUserCenterMap] = useState({ lat: 0, lng: 0 });
  const [userLocationShared, setUserLocationShared] = useState(false);
  const [trackingId, setTrackingId] = useState(0);

  const value = {
    defaultCenterMap,
    newCenterMap,
    setNewCenterMap,
    userCenterMap,
    setUserCenterMap,
    userLocationShared,
    setUserLocationShared,
    trackingId,
    setTrackingId,
  };

  return (
    <MapCenterContext.Provider value={value}>
      {children}
    </MapCenterContext.Provider>
  );
};

export default MapCenter;
