import React, { createContext, useState } from 'react';
export const GoogleMapsContext = createContext();

const GoogleMaps = ({ children }) => {
  const [map, setMap] = useState(null);
  const [maps, setMaps] = useState(null);
  const [query, setQuery] = useState('');

  const value = {
    map,
    setMap,
    maps,
    setMaps,
    query,
    setQuery,
  };

  return (
    <GoogleMapsContext.Provider value={value}>
      {children}
    </GoogleMapsContext.Provider>
  );
};

export default GoogleMaps;
