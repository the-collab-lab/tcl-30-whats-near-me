import { useContext } from 'react';
import { MapCenterContext } from '../context/MapCenterContext';
import { Map } from './Map';

const MapPage = () => {
  const value = useContext(MapCenterContext);

  return (
    <>
      <h1>What's Near Me?</h1>
      <div className="view__content">
        <Map lat={value.newCenterMap.lat} lng={value.newCenterMap.lng} />
      </div>
    </>
  );
};

export default MapPage;
