import { useState, useEffect, useRef } from 'react';

export const useLocations = ({ lat, lng, isDragged }, interval) => {
  const [locations, setLocations] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const ref = useRef(0);

  useEffect(() => {
    // Abort fetch
    let abortController = new AbortController();
    const { signal } = abortController;

    // Call to API
    const baseURL = 'https://segdeha.com/api/nearby.php';
    const completeURL = lat && lng && `${baseURL}?lat=${lat}&lng=${lng}`;

    const fetchLocations = (lat, lng) => {
      setStatus('loading');
      fetch(completeURL, { signal })
        .then((response) => {
          setIsFetching(true);
          return response.json();
        })
        .then((data) => {
          setLocations(data?.query?.pages);
          setStatus('success');
        })
        .catch((err) => {
          if (err.name !== 'AbortError') {
            setStatus('error');
            setError(err);
          }
        })
        .finally(() => setIsFetching(false));

      //Clean up
      return function cancel() {
        setStatus('cancelled');
        abortController?.abort();
      };
    };

    if (isDragged) {
      fetchLocations(lat, lng);
      return;
    }

    if (Date.now() >= ref.current + interval) {
      ref.current = Date.now();
      fetchLocations(lat, lng);
    } else {
      const id = setTimeout(() => {
        ref.current = Date.now();
        fetchLocations(lat, lng);
      }, interval - (Date.now() - ref.current));
      return () => clearTimeout(id);
    }
  }, [lat, lng, interval, isDragged]);

  return { isFetching, locations, status, error };
};
