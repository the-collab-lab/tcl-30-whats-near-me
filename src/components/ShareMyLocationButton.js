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
      const trackingId = navigator.geolocation.watchPosition(
        handleSuccess,
        handleError,
      );

      setTrackingId(trackingId);
      setUserLocationShared(sharingLocation.current);
    }
  };

  const handleStopSharing = () => {
    if (sharingLocation.current && trackingId) {
      setTrackingId(navigator.geolocation.clearWatch(trackingId));
    }
    setUserLocationShared(false);
    setNewCenterMap(defaultCenterMap);
  };

  return (
    <>
      <button
        onClick={handleShareLiveLocation}
        disabled={sharingLocation.current}
      >
        Share My Location
      </button>
      {sharingLocation.current ? (
        <button onClick={handleStopSharing}>Stop Sharing Location</button>
      ) : null}
    </>
  );
};

export default ShareMyLocationButton;
