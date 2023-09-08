import React from 'react';

import AddCommentInput from '../add-comment/AddCommentInput';

interface CommentProps {}

const Comment = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex  gap-4">
        <img
          src="https://i.pravatar.cc/32"
          alt="profile"
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="flex flex-col justify-center">
          <span className="text-md text-primary font-bold underline">
            Azat Seyrek
          </span>
          <p className="min-h-16  text-sm font-light leading-5 text-neutral-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            delectus dolore ea! Obcaecati maiores necessitatibus delectus
            suscipit possimus aliquid dolor!
          </p>
        </div>
      </div>
      <AddCommentInput />
    </div>
  );
};

export default Comment;
