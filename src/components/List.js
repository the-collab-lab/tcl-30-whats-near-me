import React, { useContext } from 'react';
import { SearchResultsContext } from '../context/SearchResults';
import {
  getLocationsFromResponseAPI,
  sortLocationsByDistance,
} from '../helpers/helpersAPI';
import { Location } from './Location';

const List = () => {
  const responseAPI = useContext(SearchResultsContext);
  const locationsResponse = getLocationsFromResponseAPI(responseAPI);
  const locations = sortLocationsByDistance(locationsResponse);

  return (
    <>
      <h1 className="list__title">List</h1>
      <div className="view__content">
        {locations?.length === 0 ? (
          <p className="list__message">List of locations is empty</p>
        ) : (
          <ul className="list__locations">
            {locations.map((location) => (
              <Location key={location.pageid} location={location} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
export default List;
