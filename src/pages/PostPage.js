import React from 'react';
import { useParams } from 'react-router-dom';

import { useFetch } from '../utils/hooks';

import BlogPost from '../components/BlogPost';
import AuthorCard from '../components/AuthorCard';
import CommentSection from '../components/CommentSection';

function PostPage() {
  const { id } = useParams();

  const post = useFetch(`posts/${id}`);
  const author = useFetch(post ? `users/${post.author}` : null, [post]);
  const comments = useFetch(`posts/${id}/comments`);

  return (
    <main>
      {post ? <BlogPost post={post} /> : null}
      {author ? <AuthorCard author={author} /> : null}
      {comments ? <CommentSection comments={comments} /> : null}
    </main>
  );
}

export default PostPage;