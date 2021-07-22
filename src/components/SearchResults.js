import React, { useState, useEffect, createContext } from 'react';

import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';

export const SearchResultsContext = createContext();

const SearchResults = ({ children }) => {
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
  }, [lat, lng]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  return isSuccess ? (
    <SearchResultsContext.Provider value={{ data }}>
      {children}
    </SearchResultsContext.Provider>
  ) : null;
};

export default SearchResults;
