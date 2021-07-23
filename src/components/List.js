import React from 'react';
import { useLocations } from '../hooks/useLocations';
import { Location } from './Location';

const List = () => {
  const lat = 48.8566;
  const lng = 2.3522;
  const { locations, loading } = useLocations(lat, lng);

  return (
    <div>
      <h1>List</h1>
      {loading && <p>Loading... </p>}
      {locations?.length === 0 ? (
        <p>List of locations is empty</p>
      ) : (
        <ul className="pages">
          {locations.map((location) => (
            <Location key={location.pageid} location={location} />
          ))}
        </ul>
      )}
    </div>
  );
};
export default List;
