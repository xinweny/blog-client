import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PropTypes as PT } from 'prop-types';

function LogoutButton({ setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate('/');
  };

  return (
    <button onClick={handleLogout}>Sign Out</button>
  )
}


LogoutButton.propTypes = {
  setUser: PT.func,
}

export default LogoutButton;