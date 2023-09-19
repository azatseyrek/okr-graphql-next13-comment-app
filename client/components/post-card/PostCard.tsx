'use client';

import { useState } from 'react';

import { teko } from '@/fonts';
import { formatRelativeDate } from '@/utils/helpers/index';
import { TfiCommentAlt } from 'react-icons/tfi';

import AddCommentInput from '../add-comment/AddCommentInput';
import Comment from '../comments/Comment';
import { IComment, IPost } from './types';

interface IProps {
  post: IPost;
}

const PostCard = ({ post }: IProps) => {
  const { description, user, comments, created_at, id, comments_aggregate } =
    post;

  const [isCommenting, setisCommenting] = useState<boolean>(false);

  const formatedDate = formatRelativeDate(created_at);

  const commentCount = comments_aggregate.aggregate.count;

  return (
    <div className="flex w-[60%] flex-col gap-4">
      <div className="rounded-xl bg-neutral-300 p-5 shadow-md ">
        <div className="flex w-full items-center justify-between border-b border-b-neutral-600 pb-3">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-full bg-neutral-300 bg-[url('https://i.pravatar.cc/32')]"></div>
            <div className="text-xl font-bold text-neutral-700">
              {user.fullName}
            </div>
          </div>

          <div className="text-xs text-neutral-500">{formatedDate}</div>
        </div>

        <div className="mb-6 mt-4">
          <div className="text-lg text-neutral-600">{description}</div>
        </div>

        <button
          onClick={() => setisCommenting(!isCommenting)}
          className="flex items-center justify-center space-x-2 text-xl text-neutral-600 transition-opacity hover:opacity-50"
        >
          <TfiCommentAlt size={24} />
          <span className={`${teko.className} `}> {commentCount}</span>
        </button>
      </div>

      {isCommenting && (
        <div className="flex flex-col gap-3">
          {comments?.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
          <AddCommentInput key={id} postId={id} />
        </div>
      )}
    </div>
  );
};

export default PostCard;
