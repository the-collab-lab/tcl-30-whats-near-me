import { useEffect, useState } from 'react';
import { fixturesnearby } from '../fixtures/fixturesnearby';

export const usePages = (centerMap) => {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const response = fixturesnearby(centerMap);
      setPages(
        response.query.pages.sort((a, b) => {
          return a.coordinates[0].dist - b.coordinates[0].dist;
        }),
      );
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [centerMap]);

  return { pages, loading, error };
};
