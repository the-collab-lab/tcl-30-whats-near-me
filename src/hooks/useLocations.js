import { useState, useEffect } from 'react';

export const useLocations = (lat, lng) => {
  const [locations, setLocations] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    // Abort fetch
    let abortController = new AbortController();
    const { signal } = abortController;
    signal.addEventListener('abort', () => {
      // Logs true:
      console.log(signal.aborted);
    });

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
        setStatus('error');
        setError(err);
        if (err.name === 'AbortError') {
          console.log('Fetch cancelled');
        } else {
          console.error('Uh oh, an error!', err);
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