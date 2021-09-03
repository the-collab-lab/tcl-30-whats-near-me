import { useContext, useRef } from 'react';
import { MapCenterContext } from '../context/MapCenterContext';
import { Button } from '../components/Button';
import { ReactComponent as ShareLocationIcon } from '../assets/share-location-icon.svg';

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
    setNewCenterMap({ ...newMapCenter, isDragged: false });

    if (!sharingLocation.current) {
      setNewCenterMap({ ...newMapCenter, isDragged: false });
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
    }
  };

  const handleStopSharing = () => {
    if (userLocationShared && trackingId) {
      setTrackingId(navigator.geolocation.clearWatch(trackingId));
    }
    setUserLocationShared(false);
    sharingLocation.current = false;
    setNewCenterMap({ ...defaultCenterMap, isDragged: true });
  };

  return (
    <Button
      className="btn btn__icon"
      label="Share location"
      icon={ShareLocationIcon}
      onClick={userLocationShared ? handleStopSharing : handleShareLiveLocation}
    />
  );
};

export default ShareMyLocationButton;
