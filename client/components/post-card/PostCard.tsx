'use client';

import { useState } from 'react';

import { teko } from '@/fonts';
import { TfiCommentAlt } from 'react-icons/tfi';

import Comment from '../comments/Comment';

const PostCard = () => {
  const [isCommenting, setisCommenting] = useState<boolean>(false);
  return (
    <div className="flex w-[60%] flex-col gap-4">
      <div className="rounded-xl bg-neutral-300 p-5 shadow-md ">
        <div className="flex w-full items-center justify-between border-b border-b-neutral-600 pb-3">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-full bg-neutral-300 bg-[url('https://i.pravatar.cc/32')]"></div>
            <div className="text-xl font-bold text-neutral-700">Joe Smith</div>
          </div>

          <div className="text-xs text-neutral-500">2 hours ago</div>
        </div>

        <div className="mb-6 mt-4">
          <div className="mb-3 text-xl font-bold text-neutral-700">
            Nulla sed leo tempus, feugiat velit vel, rhoncus neque?
          </div>
          <div className="text-lg text-neutral-600">
            Aliquam a tristique sapien, nec bibendum urna. Maecenas convallis
            dignissim turpis, non suscipit mauris interdum at. Morbi sed gravida
            nisl, a pharetra nulla. Etiam tincidunt turpis leo, ut mollis ipsum
            consectetur quis. Etiam faucibus est risus, ac condimentum mauris
            consequat nec. Curabitur eget feugiat massa
          </div>
        </div>

        <button
          onClick={() => setisCommenting(!isCommenting)}
          className="flex items-center justify-center space-x-2 text-xl text-neutral-600 transition-opacity hover:opacity-50"
        >
          <TfiCommentAlt size={24} />
          <span className={`${teko.className} `}> 125</span>
        </button>
      </div>
      {isCommenting && <Comment />}
    </div>
  );
};

export default PostCard;
