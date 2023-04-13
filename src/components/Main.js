import React from 'react'
import { PropTypes } from 'prop-types';

function Main({ children }) {
  return (
    <main>
      {children}
    </main>
  )
}

Main.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default Main;