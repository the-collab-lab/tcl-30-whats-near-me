import { useState, useEffect } from 'react';

const useFetch = (url, lat, lng) => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const getWikiEntries = async (lat, lng) => {
      setStatus('loading');
      try {
        const res = await fetch(url);

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
