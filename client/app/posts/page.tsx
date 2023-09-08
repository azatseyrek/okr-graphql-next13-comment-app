import React from 'react';

import AddCommentInput from '@/components/add-comment/AddCommentInput';
import PostCard from '@/components/post-card/PostCard';

const PostPage = () => {
  return (
    <main className="flex flex-col  gap-12">
      <AddCommentInput />
      <div className="flex w-full flex-col items-center gap-y-4  ">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </main>
  );
};

export default PostPage;
