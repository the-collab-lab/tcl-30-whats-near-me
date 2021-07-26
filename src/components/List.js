import React, { useContext } from 'react';
import { LocationsContext } from '../context/LocationsContext';
import { sortLocationsByDistance } from '../helpers/helpersAPI';
import { Location } from './Location';

const List = () => {
  const value = useContext(LocationsContext);
  const { locations } = value;
  const locationsValidated = sortLocationsByDistance(locations);

  return (
    <>
      <h1 className="list__title">List</h1>
      <div className="view__content">
        {locationsValidated?.length === 0 ? (
          <p className="list__message">List of locations is empty</p>
        ) : (
          <ul className="list__locations">
            {locationsValidated?.map((location) => (
              <Location key={location.pageid} location={location} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
export default List;
