import React from 'react';
import { useParams } from 'react-router-dom';

import { useFetch, useStorageListener } from '../utils/hooks';

import BlogPost from '../components/BlogPost';
import AuthorCard from '../components/AuthorCard';
import CommentSection from '../components/CommentSection';
import CommentForm from '../components/CommentForm';

function PostPage() {
  const { id } = useParams();
  const user = useStorageListener('user');

  const [post] = useFetch(`posts/${id}`);
  const [author] = useFetch(post ? `users/${post.author}` : null, [post]);
  const [comments, setComments] = useFetch(`posts/${id}/comments`);

  return (
    <main>
      {post ? <BlogPost post={post} /> : null}
      {author ? <AuthorCard author={author} /> : null}
      {comments ? <CommentSection comments={comments} /> : null}
      {user
        ? <CommentForm user={user} postId={id} setComments={setComments} />
        : <p>Log in to post a comment!</p>
      }
    </main>
  );
}

export default PostPage;