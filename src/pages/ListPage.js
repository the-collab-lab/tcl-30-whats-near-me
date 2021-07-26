import React, { useContext } from 'react';
import { LocationsContext } from '../context/LocationsContext';
import { sortLocationsByDistance } from '../helpers/helpersAPI';
import { LocationList } from '../components/LocationList';

const ListPage = () => {
  const value = useContext(LocationsContext);
  const { locations } = value;
  const locationsSorted = sortLocationsByDistance(locations);

  return (
    <>
      <h1 className="list__title">List</h1>
      <div className="view__content">
        <LocationList locations={locationsSorted} />
      </div>
    </>
  );
};
export default ListPage;
