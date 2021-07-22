import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const { lat, lng } = { lat: 48.8566, lng: 2.3522 };

  useEffect(() => {
    if (!url) return;

    const getWikiEntries = async (lat, lng) => {
      setStatus('loading');
      try {
        const res = await fetch(
          `https://segdeha.com/api/nearby.php?lat=${lat}&lng=${lng}`,
        );

        if (!res.ok) {
          throw new Error(res.status);
        }

        const data = await res.json();
        setData({ ...data, centerCoords: { lat, lng }, zoom: 16 });
        setStatus('success');
      } catch (error) {
        console.error(error);
        setError(error);
        setStatus('error');
      }
    };
    getWikiEntries(lat, lng);
  }, [lat, lng, url]);

  return { data, status, error };
};

export default useFetch;
