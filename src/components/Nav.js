import { ReactComponent as ListIcon } from '../assets/list-icon.svg';
import { ReactComponent as MapIcon } from '../assets/map-icon.svg';
import { Button } from '../components/Button';

const Nav = () => (
  <nav>
    <ul className="nav">
      <li>
        <Button
          href="/"
          text="Map"
          className="btn btn__link"
          icon={MapIcon}
          label="Map button"
        />
      </li>
      <li>
        <Button
          href="/list"
          text="List"
          className="btn btn__link"
          icon={ListIcon}
          label="List button"
        />
      </li>
    </ul>
  </nav>
);

export default Nav;
