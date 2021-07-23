import React from 'react';
import { useLocations } from '../hooks/useLocations';
import { Location } from './Location';

const List = () => {
  const lat = 48.8566;
  const lng = 2.3522;
  const { locations, loading } = useLocations(lat, lng);

  return (
    <div className="list">
      <h1 className="list__title">List</h1>
      <div className="view__content">
        {loading && <p className="list__message">Loading... </p>}
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
    </div>
  );
};
export default List;
