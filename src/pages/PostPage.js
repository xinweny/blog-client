import React from 'react';

import BlogPost from '../components/BlogPost';
import AuthorCard from '../components/AuthorCard';
import CommentSection from '../components/CommentSection';

function PostPage() {
  return (
    <main>
      <BlogPost />
      <AuthorCard />
      <CommentSection />
    </main>
  );
}

export default PostPage;