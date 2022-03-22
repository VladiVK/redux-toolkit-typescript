import React from 'react';
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';

const PostsContainer = () => {
  const {
    data: posts,
    error,
    isLoading,
    refetch,
  } = postAPI.useFetchAllPostsQuery(5);
  return (
    <div>
      <button onClick={() => refetch()}>REFETCH POSTS</button>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error. Something went wrong!</h1>}
      {posts &&
        posts.map((post) => {
          return <PostItem key={post.id} post={post} />;
        })}
    </div>
  );
};

export default PostsContainer;
