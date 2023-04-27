import React, { useState, useEffect } from 'react';
import { parseISO, format } from 'date-fns';
import { PropTypes as PT } from 'prop-types';
import parse from 'html-react-parser';

import '../styles/BlogPost.css';

function BlogPost({ post }) {
  const [htmlString, setHtmlString] = useState('');

  useEffect(() => {
    if (post) {
      const parser = new DOMParser();

      const decodedString = parser.parseFromString(post.text, 'text/html').documentElement.textContent;

      setHtmlString(decodedString);
    }
  }, []);

  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <div className="font-small">
        <p>{format(parseISO(post.createdAt), 'd MMM Y, hh:mm a')}</p>
        {post.updatedAt && <p className="italic">Modified {format(parseISO(post.updatedAt), 'd MMM Y, hh:mm a')}</p>}
      </div>
      {post.imgUrl && <img className="post-image" src={post.imgUrl} />}
      <div className="post-content">{parse(htmlString)}</div>
    </div>
  );
}

BlogPost.propTypes = {
  post: PT.shape({
    title: PT.string.isRequired,
    text: PT.string.isRequired,
    createdAt: PT.string.isRequired,
    updatedAt: PT.string,
    imgUrl: PT.string, 
    tags: PT.arrayOf(PT.string),
  }),
};

export default BlogPost;