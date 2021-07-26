import { useState, useEffect, useRef } from 'react';

const useFetch = (url, lat, lng) => {
  const cache = useRef({});
  const [locations, setLocations] = useState([]);
  const [centerMap, setCenterMap] = useState({});
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [zoom, setZoom] = useState(12);

  useEffect(() => {
    if (!url) return;

    const getWikiEntries = async (lat, lng) => {
      setStatus('loading');
      try {
        if (cache.current[url]) {
          const data = cache.current[url];
          setLocations(data);
          setStatus('fetched');
        } else {
          const res = await fetch(url);

          if (!res.ok) {
            throw new Error(res.status);
          }

          const response = await res.json();
          setLocations(response?.query?.pages);
          setCenterMap({ lat, lng });
          setZoom(16);
          cache.current[url] = response?.query?.pages; // set response in cache;
          setStatus('success');
        }
      } catch (error) {
        console.error(error);
        setError(error);
        setStatus('error');
      }
    };
    getWikiEntries(lat, lng);
  }, [lat, lng, url]);

  return { locations, centerMap, zoom, status, error };
};

export default useFetch;
