import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function TopStories() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://blog-api-5lv9.onrender.com/api/posts')
      .then(res => res.json())
      .then(res => {
        setPosts(res.data.posts);
      });
  }, []);

  return (
    <div>
      <h3>Stories</h3>
      <div>
        {posts.map(post => (
          <div key={post._id}>
            <Link to={`/posts/${post._id}`}>
              <h4>{post.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopStories;