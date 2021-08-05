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
      <header className="view__header">
        <h1>What's Near Me?</h1>
        {status === 'loading' ? <Spinner /> : null}
      </header>
      <div className="view__content">
        {status === 'error' ? <ErrorMessage error={error} /> : null}
        <Map
          defaultCenterMap={defaultCenterMap}
          centerMap={newCenterMap}
          locations={locations}
          zoom={16}
        />
      </div>
    </>
  );
};

export default MapPage;
