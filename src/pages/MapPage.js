import { useContext } from 'react';
import { MapCenterContext } from '../context/MapCenterContext';
import { Map } from '../components/Map';
import { LocationsContext } from '../context/LocationsContext';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';
import { HeaderSearch } from '../components/HeaderSearch';

const MapPage = () => {
  const valueCenterMap = useContext(MapCenterContext);
  const valueLocations = useContext(LocationsContext);
  const { defaultCenterMap, newCenterMap } = valueCenterMap;
  const { locations, status, error } = valueLocations;

  return (
    <>
      <HeaderSearch>{status === 'loading' ? <Spinner /> : null}</HeaderSearch>
      <div className="view__content">
        {status === 'error' ? <ErrorMessage error={error} /> : null}
        <Map
          defaultCenterMap={defaultCenterMap}
          centerMap={newCenterMap}
          locations={locations}
          zoom={14}
        />
      </div>
    </>
  );
};

export default MapPage;
