'use client';

import PostCard from '@/components/post-card/PostCard';
import { IPost } from '@/components/post-card/types';
import { teko } from '@/fonts';
import { GET_ALL_POSTS } from '@/graphql/queries';
import { useQuery } from '@apollo/client';

const PostPage = () => {
  const { data, loading } = useQuery(GET_ALL_POSTS);

  console.log(data);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <main className="flex flex-col w-full  items-center gap-12">
      <h1
        className={`uppercase ${teko.className} text-3xl mx-auto  border-2 border-dashed border-primary  p-4 rounded-lg w-64 text-center bg-neutral`}
      >
        post page
      </h1>

      {data?.posts?.map((p: IPost) => <PostCard key={p.id} post={p} />)}

      <div className="flex w-full flex-col items-center gap-y-4  "></div>
    </main>
  );
};

export default PostPage;
