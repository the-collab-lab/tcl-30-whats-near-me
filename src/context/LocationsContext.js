import React, { createContext, useContext, useState } from 'react';
import { MapCenterContext } from './MapCenterContext';
import { useLocations } from '../hooks/useLocations';

export const LocationsContext = createContext();

const Locations = ({ children }) => {
  const valueMapCenter = useContext(MapCenterContext);
  const { newCenterMap } = valueMapCenter;
  const [wait, setWait] = useState(0);
  const { isFetching, locations, status, error } = useLocations(
    newCenterMap,
    wait * 1000,
  );

  const value = {
    locations,
    isFetching,
    status,
    error,
    wait,
    setWait,
  };
  return (
    <LocationsContext.Provider value={value}>
      {children}
    </LocationsContext.Provider>
  );
};

export default Locations;
