import React from 'react';
import { PropTypes as PT } from 'prop-types';

import '../styles/Tags.css';

function Tags({ tags }) {
  return (
    <div className="tags">
      {tags.map(tag => <div className="tag" key={tag}>{tag}</div>)}
    </div>
  );
}

Tags.propTypes = {
  tags: PT.arrayOf(PT.string),
};

export default Tags;