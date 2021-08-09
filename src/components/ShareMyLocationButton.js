import { useContext } from 'react';

// import useRef as well
import { MapCenterContext } from '../context/MapCenterContext';

const ShareMyLocationButton = ({ disabled = false }) => {
  const valueCenterMap = useContext(MapCenterContext);
  const {
    defaultCenterMap,
    setUserCenterMap,
    setNewCenterMap,
    setTrackingId,
    userLocationShared,
    setUserLocationShared,
    trackingId,
  } = valueCenterMap;

  const handleSuccess = (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const newMapCenter = { lat, lng };
    setUserCenterMap(newMapCenter);

    if (!userLocationShared) {
      setNewCenterMap(newMapCenter);
      setUserLocationShared(true);
    }
  };
  const handleError = () => setUserCenterMap(defaultCenterMap);

  const handleShareLiveLocation = () => {
    if (navigator.geolocation) {
      if (trackingId === null) {
        const newTrackingId = navigator.geolocation.watchPosition(
          handleSuccess,
          handleError,
        );
        setTrackingId(newTrackingId);
      }
    }
  };

  return (
    <button onClick={handleShareLiveLocation} disabled={disabled}>
      Share My Location
    </button>
  );
};

export default ShareMyLocationButton;
