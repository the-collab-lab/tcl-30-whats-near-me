import React, { createContext, useState } from 'react';
export const MapCenterContext = createContext();

const MapCenter = ({ children }) => {
  const defaultCenterMap = {
    lat: 48.8566,
    lng: 2.3522,
  };
  const [newCenterMap, setNewCenterMap] = useState(defaultCenterMap);
  const [userCenterMap, setUserCenterMap] = useState({ lat: 0, lng: 0 });
  const [userLocationShared, setUserLocationShared] = useState('no');
  const [trackingId, setTrackingId] = useState(0);
  const value = {
    defaultCenterMap,
    newCenterMap,
    setNewCenterMap,
    userLocationShared,
    setUserLocationShared,
    userCenterMap,
    setUserCenterMap,
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
