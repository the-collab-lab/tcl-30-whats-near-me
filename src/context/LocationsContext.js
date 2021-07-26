import React, { createContext, useContext } from 'react';
import { MapCenterContext } from './MapCenterContext';
import { useLocations } from '../hooks/useLocations';

export const LocationsContext = createContext();

const Locations = ({ children }) => {
  const valueMapCenter = useContext(MapCenterContext);
  const { newCenterMap } = valueMapCenter;
  const lat = newCenterMap.lat;
  const lng = newCenterMap.lng;
  const { isFetching, locations, status, error } = useLocations(lat, lng);
  const value = { locations, isFetching, status, error };

  return (
    <LocationsContext.Provider value={value}>
      {children}
    </LocationsContext.Provider>
  );
};

export default Locations;
