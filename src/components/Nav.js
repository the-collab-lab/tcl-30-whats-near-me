import { NavLink } from 'react-router-dom';
import FlyToMeButton from './FlyToMeButton';
import ShareLiveLocationButton from './ShareLiveLocationButton';

const Nav = () => (
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
          <FlyToMeButton />
        </li>
        <li>
          <ShareLiveLocationButton />
        </li>
      </ul>
    </nav>
  </footer>
);

export default Nav;
