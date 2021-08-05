import { useState, useEffect } from 'react';

export const useLocations = (lat = 0, lng = 0) => {
  const [locations, setLocations] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    // Abort fetch
    let abortController = new AbortController();
    const { signal } = abortController;

    // Call to API
    const baseURL = 'https://segdeha.com/api/nearby.php';
    const completeURL = lat && lng && `${baseURL}?lat=${lat}&lng=${lng}`;

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

    // Clean up
    return function cancel() {
      setStatus('cancelled');
      abortController?.abort();
    };
  }, [lat, lng]);

  return { isFetching, locations, status, error };
};
