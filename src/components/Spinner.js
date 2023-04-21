import React from 'react';
import { PropTypes as PT } from 'prop-types';

import dualRing from '../assets/dual-ring-animated.svg';
import ellipsis from '../assets/ellipsis-animated.svg';

import '../styles/Spinner.css';

function Spinner({ clsName, options }) {
  const spinner = options.type === 'ellipsis' ? ellipsis : dualRing;

  return (
    <div className={`spinner ${clsName}`}>
      <img src={spinner} alt="Loading spinner" />
    </div>
  );
}

Spinner.propTypes = {
  options: PT.shape({
    type: PT.string.isRequired,
  }),
  clsName: PT.string,
};

export default Spinner;