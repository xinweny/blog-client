import React from 'react';
import { Link } from 'react-router-dom';

import { useStorageListener } from '../utils/hooks';

import NavBar from './NavBar';

import siteLogo from '../assets/logo.png';
import '../styles/Header.css';

function Header() {
  const user = useStorageListener('user');

  return (
    <header>
      <Link to="/">
        <div className="site-branding">
          <img className="site-logo" src={siteLogo} alt="Blog Tree" />
          <h1>BlogTree</h1>
        </div>
      </Link>
      <div className="header-links">
        {user ? <Link to={`/users/${user.id}`}>{user.username}</Link> : null}
        <NavBar user={user} />
      </div>
    </header>
  );
}

export default Header;
