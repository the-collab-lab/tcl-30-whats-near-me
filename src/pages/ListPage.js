import React, { useContext } from 'react';
import { LocationsContext } from '../context/LocationsContext';
import { sortLocationsByDistance } from '../helpers/helpersAPI';
import { LocationList } from '../components/LocationList';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';

const ListPage = () => {
  const valueLocations = useContext(LocationsContext);
  const { locations, status, error } = valueLocations;
  const locationsSorted = sortLocationsByDistance(locations);

  return (
    <>
      <h1 className="list__title">List</h1>
      <div className="view__content">
        {status === 'loading' ? <Spinner /> : null}
        {status === 'error' ? <ErrorMessage error={error} /> : null}
        {status === 'success' || status === 'cancelled' ? (
          <LocationList locations={locationsSorted} />
        ) : null}
      </div>
    </>
  );
};
export default ListPage;
