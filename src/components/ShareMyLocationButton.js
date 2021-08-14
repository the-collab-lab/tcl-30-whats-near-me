import { useContext, useRef } from 'react';
import { MapCenterContext } from '../context/MapCenterContext';

const ShareMyLocationButton = () => {
  const valueCenterMap = useContext(MapCenterContext);
  const sharingLocation = useRef(false);
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

    if (!sharingLocation.current) {
      setNewCenterMap(newMapCenter);
      sharingLocation.current = true;
      setUserLocationShared(sharingLocation.current);
    }
  };
  const handleError = () => setUserCenterMap(defaultCenterMap);

  const buttonText = userLocationShared
    ? 'Stop Sharing Location'
    : 'Share My Location';

  const handleShareLiveLocation = () => {
    if (navigator.geolocation) {
      const trackingId = navigator.geolocation.watchPosition(
        handleSuccess,
        handleError,
      );

      setTrackingId(trackingId);
    }
  };

  const handleStopSharing = () => {
    if (userLocationShared && trackingId) {
      setTrackingId(navigator.geolocation.clearWatch(trackingId));
    }
    setUserLocationShared(false);
    sharingLocation.current = false;
    setNewCenterMap(defaultCenterMap);
  };

  return (
    <button
      onClick={userLocationShared ? handleStopSharing : handleShareLiveLocation}
    >
      {buttonText}
    </button>
  );
};

export default ShareMyLocationButton;
