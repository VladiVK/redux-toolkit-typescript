import React, { FC } from 'react';
import { IPost } from '../../public/models/IPost';

type PostItemProps = {
  post: IPost;
};
// const PostItem = ({post}: PostItemProps) => {
const PostItem: FC<PostItemProps> = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button>delete</button>
    </div>
  );
};

export default PostItem;
