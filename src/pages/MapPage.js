import { useContext } from 'react';
import { MapCenterContext } from '../context/MapCenterContext';
import { Map } from '../components/Map';
import { LocationsContext } from '../context/LocationsContext';

const MapPage = () => {
  const valueCenterMap = useContext(MapCenterContext);
  const valueLocations = useContext(LocationsContext);
  const { defaultCenterMap, newCenterMap } = valueCenterMap;
  const { locations } = valueLocations;

  return (
    <>
      <h1>What's Near Me?</h1>
      <div className="view__content">
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
