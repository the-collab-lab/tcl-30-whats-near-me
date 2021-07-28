import { useContext } from 'react';
import { MapCenterContext } from '../context/MapCenterContext';
import { Map } from '../components/Map';
import { LocationsContext } from '../context/LocationsContext';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';

const MapPage = () => {
  const valueCenterMap = useContext(MapCenterContext);
  const valueLocations = useContext(LocationsContext);
  const { defaultCenterMap, newCenterMap } = valueCenterMap;
  const { locations, status, error } = valueLocations;

  return (
    <>
      <h1>What's Near Me?</h1>
      <div className="view__content">
        {status === 'loading' ? <Spinner /> : null}
        {status === 'error' ? <ErrorMessage error={error} /> : null}
        {status === 'success' || status === 'cancelled' ? (
          <Map
            defaultCenterMap={defaultCenterMap}
            centerMap={newCenterMap}
            locations={locations}
            zoom={16}
          />
        ) : null}
      </div>
    </>
  );
};

export default MapPage;
