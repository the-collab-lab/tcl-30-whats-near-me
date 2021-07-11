import React from 'react';

import { NavLink } from 'react-router-dom';

const Nav = () => (
  <div className="nav-container">
    <nav>
      <ul className="nav">
        <li>
          <NavLink exact to="/" className="nav__link">
            Map
          </NavLink>
        </li>
        <li>
          <NavLink to="/list" className="nav__link">
            List
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className="nav__link">
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink to="/help" className="nav__link">
            Help
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Nav;
