import React, { useState } from 'react';
import { PropTypes as PT } from 'prop-types';

import { sendReq } from '../utils/helpers';

function CommentForm({ postId, setComments }) {
  const [text, setText] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const res = await sendReq('POST', `posts/${postId}/comments`, { text }, token);

      if (res.status === 200) {
        const comment = (await res.json()).data;
        comment.author = {
          id: user.id,
          username: user.username,
        };

        setText('');
        setComments(prev => [...prev, comment]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name="text"
        id="text"
        placeholder="Post your thoughts..."
        value={text}
        onChange={e => setText(e.target.value)}
        required
      />
      <p>Post as {user.username}</p>
      <button type="submit">Submit</button>
    </form>
  )
}

CommentForm.propTypes = {
  postId: PT.string.isRequired,
  setComments: PT.func.isRequired,
}

export default CommentForm;