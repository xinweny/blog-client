import React from 'react';
import { parseISO, format } from 'date-fns';
import { PropTypes as PT } from 'prop-types';

function BlogPost({ post }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{format(parseISO(post.createdAt), 'do MMMM Y, hh:mm a')}</p>
      {post.updatedAt
        ? <p>Modified {format(parseISO(post.updatedAt), 'do MMMM Y, hh:mm a')}</p>
        : null
      }
      <p>{post.text}</p>
    </div>
  );
}

BlogPost.propTypes = {
  post: PT.shape({
    title: PT.string.isRequired,
    text: PT.string.isRequired,
    createdAt: PT.string.isRequired,
    updatedAt: PT.string,
  }),
};

export default BlogPost;