import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/homePage">
            <FontAwesomeIcon icon={faCog} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/itemDetail" />
        </li>
        <li>
          <NavLink />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
