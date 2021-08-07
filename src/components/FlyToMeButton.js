import { useContext } from 'react';
import { MapCenterContext } from '../context/MapCenterContext';

const FlyToMeButton = ({ disabled = false }) => {
  const valueCenterMap = useContext(MapCenterContext);
  const { userLocationShared, userCenterMap, setNewCenterMap } = valueCenterMap;

  const isZeroPosition = (position) => {
    const { lat, lng } = position;
    return lat === 0 && lng === 0;
  };

  const handleFlyToMe = () => {
    if (userLocationShared) {
      if (!isZeroPosition(userCenterMap)) {
        setNewCenterMap(userCenterMap);
      } else {
        console.warn("The user location doesn't valid (0, 0) position.");
      }
    } else {
      console.info("You didn't share your location.");
    }
  };

  return (
    <button onClick={handleFlyToMe} disabled={disabled}>
      Fly to me
    </button>
  );
};

export default FlyToMeButton;
