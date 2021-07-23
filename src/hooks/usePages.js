import { useEffect, useState } from 'react';
import { fixturesnearby } from '../fixtures/fixturesnearby';
import {
  getPagesFromResponseAPI,
  sortPagesByDistance,
} from '../helpers/helpersAPI';

export const usePages = (lat = 0, lng = 0) => {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const responseAPI = fixturesnearby({ lat, lng });
      const pagesResponse = getPagesFromResponseAPI(responseAPI);
      setPages(sortPagesByDistance(pagesResponse));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [lat, lng]);

  return { pages, loading, error };
};
