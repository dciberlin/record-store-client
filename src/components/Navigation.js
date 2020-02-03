import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navigation() {
  const toggleSidebar = e => {
    const sidebar = document.querySelector('#sidebar');
    sidebar.classList.toggle('slide-right');
  };

  return (
    <>
      <div id="navigation" className="flex-row-center fifthColor">
        <div id="burger">
          <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} />
        </div>
        <div id="logo">
          <Link to="/">BABYLON RECORDS</Link>
        </div>
      </div>
      <div id="sidebar" className="fifthColor">
        <div className="menu-item">
          <Link to="/login">Login</Link>
        </div>
        <div className="menu-item">
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </>
  );
}

export default Navigation;
