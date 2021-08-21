import { useState, useEffect, useRef } from 'react';

export const useLocations = ({ lat, lng, isDragged }, interval) => {
  const [locations, setLocations] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const timeRef = useRef(0);

  useEffect(() => {
    // Abort fetch
    let abortController = new AbortController();
    const { signal } = abortController;

    // Call to API
    const baseURL = 'https://segdeha.com/api/nearby.php';
    const completeURL = lat && lng && `${baseURL}?lat=${lat}&lng=${lng}`;

    const fetchLocations = () => {
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
      fetchLocations();
      return;
    }

    if (Date.now() >= timeRef.current + interval) {
      timeRef.current = Date.now();
      fetchLocations();
      return;
    } else {
      const id = setTimeout(() => {
        timeRef.current = Date.now();
        fetchLocations();
      }, interval - (Date.now() - timeRef.current));
      return () => clearTimeout(id);
    }
  }, [lat, lng, interval, isDragged]);

  return { isFetching, locations, status, error };
};
