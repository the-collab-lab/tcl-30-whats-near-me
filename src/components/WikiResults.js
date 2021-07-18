import React, { useState, useEffect } from 'react';

import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';

import Map from './Map';

const WikiResults = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const isLoading = status === 'loading';
  const isSuccess = status === 'success';
  const isError = status === 'error';

  const { lat, lng } = { lat: 48.8566, lng: 2.3522 };

  useEffect(() => {
    if (!(lat, lng)) return;

    const getWikiEntries = async (lat, lng) => {
      setStatus('loading');
      try {
        const res = await fetch(
          `https://segdeha.com/api/nearby.php?lat=${lat}&lng=${lng}`,
        );

        if (!res.ok) {
          setError(error);
          setStatus('error');
          throw new Error(res.status);
        }

        const data = await res.json();
        setData({ ...data, centerCoords: { lat, lng }, zoom: 11 });

        setStatus('success');
      } catch (error) {
        console.error(error);
        setError(error);
        setStatus('error');
      }
    };
    getWikiEntries(lat, lng);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  return isSuccess ? (
    data && data.query ? (
      <Map data={data} />
    ) : (
      <ErrorMessage />
    )
  ) : null;
};

export default WikiResults;