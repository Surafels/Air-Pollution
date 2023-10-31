import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faMicrophone, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (

    <div>
      {isHome ? (
        <div />
      ) : (
        <div>
          <NavLink to="/">
            <FontAwesomeIcon icon={faArrowLeft} />
          </NavLink>
        </div>
      )}
      <div>
        <h1>Air Pollution</h1>
      </div>
      <div>
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <div>
        <FontAwesomeIcon icon={faMicrophone} />
        <FontAwesomeIcon icon={faCog} />

      </div>
    </div>
  );
}

export default Navigation;
