import React, { useContext } from 'react';
import { MapCenterContext } from '../context/MapCenterContext';
import Nav from './Nav';
import ShareMyLocationButton from './ShareMyLocationButton';
import FlyToMeButton from './FlyToMeButton';

const Footer = () => {
  const { userLocationShared } = useContext(MapCenterContext);

  return (
    <footer>
      <div className="btn-container">
        <ShareMyLocationButton />
        <FlyToMeButton disabled={!userLocationShared} />
      </div>
      <Nav />
    </footer>
  );
};

export default Footer;
