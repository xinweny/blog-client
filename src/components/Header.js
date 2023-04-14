import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import NavBar from './NavBar';

function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserData = () => {
      const item = localStorage.getItem('user');
      console.log(item);
      if (item) setUser(JSON.parse(item));
    };

    window.addEventListener('storage', getUserData);

    return () => window.removeEventListener('storage', getUserData);
  }, []);

  return (
    <header>
      <Link to="/">
        <div className="site-branding">
          <img src="" alt="Blog Tree" />
          <h1>BlogTree</h1>
        </div>
      </Link>
      {user ? <Link to={`/users/${user.id}`}>{user.username}</Link> : null}
      <NavBar user={user} setUser={setUser} />
    </header>
  );
}

export default Header;
