import React from 'react';
import { Link } from 'react-router-dom';

import { useStorageListener } from '../utils/hooks';

import NavBar from './NavBar';

import '../styles/Header.css';

function Header() {
  const user = useStorageListener('user');

  return (
    <header>
      <Link to="/">
        <div className="site-branding">
          <img src="" alt="Blog Tree" />
          <h1>BlogTree</h1>
        </div>
      </Link>
      {user ? <Link to={`/users/${user.id}`}>{user.username}</Link> : null}
      <NavBar user={user} />
    </header>
  );
}

export default Header;
