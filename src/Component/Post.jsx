import useStore from '../Store/Usestore';
import React, { useEffect } from 'react';
import useFriendsPostReactors from '../Reactors/useFriendsPostReactors';
const Post = () => {
  const posts = useFriendsPostReactors();
  const fetchPosts = useStore((store) => store.fetchPosts);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      <h3>Post</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
