import React, { createContext } from 'react';

import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';

import useFetch from '../hooks/useFetch';

export const SearchResultsContext = createContext();

const SearchResults = ({ children }) => {
  const { lat, lng } = { lat: 48.8566, lng: 2.3522 };
  const url =
    lat && lng && `https://segdeha.com/api/nearby.php?lat=${lat}&lng=${lng}`;
  const { status, data, error } = useFetch(url);

  const isLoading = status === 'loading';
  const isSuccess = status === 'success';
  const isError = status === 'error';

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
