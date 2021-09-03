import { useContext } from 'react';
import { MapCenterContext } from '../context/MapCenterContext';
import { Button } from '../components/Button';
import { ReactComponent as FlyToMeIcon } from '../assets/fly-to-me-icon.svg';

const FlyToMeButton = ({ disabled = false }) => {
  const valueCenterMap = useContext(MapCenterContext);
  const { userCenterMap, setNewCenterMap } = valueCenterMap;

  const isZeroPosition = (position) => {
    const { lat, lng } = position;
    return lat === 0 && lng === 0;
  };

  const handleFlyToMe = () => {
    if (!isZeroPosition(userCenterMap)) {
      setNewCenterMap(userCenterMap);
    } else {
      console.warn("The user location doesn't valid (0, 0) position.");
    }
  };

  return (
    <Button
      className="btn btn__icon"
      label="Fly to me"
      icon={FlyToMeIcon}
      onClick={handleFlyToMe}
      disabled={disabled}
    />
  );
};

export default FlyToMeButton;
