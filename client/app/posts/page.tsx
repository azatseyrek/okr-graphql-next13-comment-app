'use client';

import AddNewPost from '@/components/add-post/AddNewPost';
import PostCard from '@/components/post-card/PostCard';
import { IPost } from '@/components/post-card/types';
import { teko } from '@/fonts';
import { GET_ALL_POSTS_SUBSC } from '@/graphql/subscriptions';
import { useSubscription } from '@apollo/client';

const PostPage = () => {
  const { data, loading, error } = useSubscription(GET_ALL_POSTS_SUBSC);

  console.log(error);

  if (loading) {
    return <span className="loading loading-ring loading-lg" />;
  }

  return (
    <main className="flex flex-col w-full  items-center gap-12">
      <h1
        className={`uppercase ${teko.className} text-3xl mx-auto  border-2 border-dashed border-primary  p-4 rounded-lg w-64 text-center bg-neutral`}
      >
        post page
      </h1>
      <AddNewPost />

      {data?.posts?.map((p: IPost) => <PostCard key={p.id} post={p} />)}
    </main>
  );
};

export default PostPage;
