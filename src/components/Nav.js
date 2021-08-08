import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MapCenterContext } from '../context/MapCenterContext';
import FlyToMeButton from './FlyToMeButton';
import ShareMyLocationButton from './ShareMyLocationButton';

const Nav = () => {
  const valueCenterMap = useContext(MapCenterContext);
  const { userLocationShared } = valueCenterMap;

  return (
    <footer>
      <nav>
        <ul className="nav">
          <li>
            <NavLink exact to="/">
              Map
            </NavLink>
          </li>
          <li>
            <NavLink to="/list">List</NavLink>
          </li>
          <li>
            <NavLink to="/settings">Settings</NavLink>
          </li>
          <li>
            <NavLink to="/help">Help</NavLink>
          </li>
          <li>
            <ShareMyLocationButton />
          </li>
          <li>
            <FlyToMeButton disabled={!userLocationShared} />
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Nav;
