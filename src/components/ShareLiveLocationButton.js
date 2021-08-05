import { useContext } from 'react';
import { MapCenterContext } from '../context/MapCenterContext';

const ShareLiveLocationButton = () => {
  const valueCenterMap = useContext(MapCenterContext);
  const {
    defaultCenterMap,
    setUserCenterMap,
    setUserLocationShared,
    setNewCenterMap,
    setTrackingId,
  } = valueCenterMap;

  const handleSuccess = (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const newMapCenter = { lat, lng };
    setNewCenterMap(newMapCenter);
    setUserCenterMap(newMapCenter);
  };
  const handleError = () => setUserCenterMap(defaultCenterMap);

  const handleShareLiveLocation = () => {
    if (navigator?.geolocation) {
      const trackingId = navigator?.geolocation?.watchPosition(
        handleSuccess,
        handleError,
      );
      setTrackingId(trackingId);
      setUserLocationShared('yes');
    }
  };

  return <button onClick={handleShareLiveLocation}>Share Live Location</button>;
};

export default ShareLiveLocationButton;
