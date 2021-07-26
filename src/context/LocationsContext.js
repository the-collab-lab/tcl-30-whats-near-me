import React, { createContext, useContext } from 'react';
import { MapCenterContext } from './MapCenterContext';
import useFetch from '../hooks/useFetch';

export const LocationsContext = createContext();

const Locations = ({ children }) => {
  const valueMapCenter = useContext(MapCenterContext);
  const { newCenterMap } = valueMapCenter;
  const lat = newCenterMap.lat;
  const lng = newCenterMap.lng;
  const url =
    lat && lng && `https://segdeha.com/api/nearby.php?lat=${lat}&lng=${lng}`;
  const { locations } = useFetch(url, lat, lng);
  const value = { locations };

  return (
    <LocationsContext.Provider value={value}>
      {children}
    </LocationsContext.Provider>
  );
};

export default Locations;
