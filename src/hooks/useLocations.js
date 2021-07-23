import { useEffect, useState } from 'react';
import { fixturesnearby } from '../fixtures/fixturesnearby';
import {
  getLocationsFromResponseAPI,
  sortLocationsByDistance,
} from '../helpers/helpersAPI';

export const useLocations = (lat = 0, lng = 0) => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const responseAPI = fixturesnearby({ lat, lng });
      const locationsResponse = getLocationsFromResponseAPI(responseAPI);
      setLocations(sortLocationsByDistance(locationsResponse));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [lat, lng]);

  return { locations, loading, error };
};
