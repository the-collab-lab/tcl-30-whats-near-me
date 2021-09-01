import { Button } from './Button';
import '../App.css';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Button href="/" term="Map" />
      </li>
      <li>
        <Button href="/list" term="List" />
      </li>
      <li>
        <Button href="/settings" term="Settings" />
      </li>
      <li>
        <Button href="/help" term="Help" />
      </li>
    </ul>
  </nav>
);

export default Nav;
