import React, { createContext, useState } from 'react';
export const GoogleMapsContext = createContext();

const GoogleMaps = ({ children }) => {
  const [map, setMap] = useState(null);
  const [maps, setMaps] = useState(null);

  const value = {
    map,
    setMap,
    maps,
    setMaps,
  };

  return (
    <GoogleMapsContext.Provider value={value}>
      {children}
    </GoogleMapsContext.Provider>
  );
};

export default GoogleMaps;
