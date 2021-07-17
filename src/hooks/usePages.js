import { fixturesnearby } from '../fixtures/fixturesnearby';
import { useState, useEffect } from 'react';

export const usePages = (centerMap) => {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      console.log(centerMap);
      const response = fixturesnearby(centerMap);
      console.log(response);
      setPages(response.query.pages);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [centerMap]);

  return { pages, loading, error };
};
