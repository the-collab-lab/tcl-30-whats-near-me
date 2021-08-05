import { useContext } from 'react';
import { MapCenterContext } from '../context/MapCenterContext';

const FlyToMeButton = () => {
  const valueCenterMap = useContext(MapCenterContext);
  const {
    defaultCenterMap,
    setUserCenterMap,
    setUserLocationShared,
    setNewCenterMap,
  } = valueCenterMap;

  const handleSuccess = (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const newMapCenter = { lat, lng };
    setNewCenterMap(newMapCenter);
    setUserCenterMap(newMapCenter);
  };
  const handleError = () => setUserCenterMap(defaultCenterMap);

  const handleFlyToMe = () => {
    if (navigator?.geolocation) {
      navigator?.geolocation?.getCurrentPosition(handleSuccess, handleError);
      setUserLocationShared('yes');
    }
  };

  return <button onClick={handleFlyToMe}>Fly to me</button>;
};

export default FlyToMeButton;
