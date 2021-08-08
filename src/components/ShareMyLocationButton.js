import { useContext } from 'react';
import { MapCenterContext } from '../context/MapCenterContext';

const ShareMyLocationButton = () => {
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
      const trackingId = navigator.geolocation.watchPosition(
        handleSuccess,
        handleError,
      );

      setTrackingId(trackingId);
      setUserLocationShared(true);
    }
  };

  const handleStopSharing = () => {
    if (userLocationShared && trackingId) {
      setTrackingId(navigator.geolocation.clearWatch(trackingId));
    }
    setUserLocationShared(false);
    setNewCenterMap(defaultCenterMap);
  };
  console.log('---', trackingId);
  return (
    <>
      <button onClick={handleShareLiveLocation} disabled={userLocationShared}>
        Share My Location
      </button>
      {userLocationShared ? (
        <button onClick={handleStopSharing}>Stop Sharing Location</button>
      ) : null}
    </>
  );
};

export default ShareMyLocationButton;
