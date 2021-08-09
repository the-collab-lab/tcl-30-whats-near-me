import { useContext, useRef } from 'react';

import { MapCenterContext } from '../context/MapCenterContext';

const ShareMyLocationButton = ({ disabled = false }) => {
  const valueCenterMap = useContext(MapCenterContext);
  const sharingLocation = useRef(false);
  const {
    defaultCenterMap,
    setUserCenterMap,
    setNewCenterMap,
    setTrackingId,
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
