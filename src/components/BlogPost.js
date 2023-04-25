import React, { useState, useEffect } from 'react';
import { parseISO, format } from 'date-fns';
import { PropTypes as PT } from 'prop-types';
import parse from 'html-react-parser';

function BlogPost({ post }) {
  const [htmlString, setHtmlString] = useState('');

  useEffect(() => {
    if (post) {
      console.log(post.text);
      const parser = new DOMParser();
      const preprocessedStr = parser.parseFromString(post.text, 'text/html').documentElement.textContent;
      const decodedString = parser.parseFromString(preprocessedStr, 'text/html').documentElement.textContent;

      setHtmlString(decodedString);
    }
  }, []);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{format(parseISO(post.createdAt), 'do MMMM Y, hh:mm a')}</p>
      {post.updatedAt && <p>Modified {format(parseISO(post.updatedAt), 'do MMMM Y, hh:mm a')}</p>}
      {post.imgUrl && <img src={post.imgUrl} />}
      <div>{parse(htmlString)}</div>
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
  }),
};

export default BlogPost;