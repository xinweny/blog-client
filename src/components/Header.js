import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/">
        <div className="site-branding">
          <img src="" alt="Blog Tree" />
          <h1>BlogTree</h1>
        </div>
      </Link>
    </header>
  );
}

export default Header;
