import { useContext } from 'react';
import { MapCenterContext } from '../context/MapCenterContext';
import { Map } from './Map';

const MapPage = () => {
  const valueCenterMap = useContext(MapCenterContext);
  const { defaultCenterMap, newCenterMap } = valueCenterMap;

  return (
    <>
      <h1>What's Near Me?</h1>
      <div className="view__content">
        <Map
          defaultCenterMap={defaultCenterMap}
          centerMap={newCenterMap}
          zoom={16}
        />
      </div>
    </>
  );
};

export default MapPage;
