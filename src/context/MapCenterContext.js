import React, { createContext, useState } from 'react';
export const MapCenterContext = createContext();

const MapCenter = ({ children }) => {
  const defaultCenterMap = {
    lat: 48.8566,
    lng: 2.3522,
  };
  const [newCenterMap, setNewCenterMap] = useState(defaultCenterMap);
  const [locationShared, setLocationShared] = useState('no');
  const value = {
    defaultCenterMap,
    newCenterMap,
    setNewCenterMap,
    locationShared,
    setLocationShared,
  };

  return (
    <MapCenterContext.Provider value={value}>
      {children}
    </MapCenterContext.Provider>
  );
};

export default MapCenter;
