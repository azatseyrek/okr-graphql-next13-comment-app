import React from 'react';

import { GiQuillInk } from 'react-icons/gi';

interface IProps {
  postId: number;
}

const AddCommentInput = (props: IProps) => {
  return (
    <div className="flex flex-col gap-2">
      <textarea
        className="textarea textarea-neutral border-secondary text-lg w-full border-4 resize-none"
        rows={4}
        maxLength={300}
        placeholder="Your comment..."
      ></textarea>
      <button
        onClick={() => {
          console.log(props.postId);
        }}
        className="btn btn-neutral w-32 self-end"
      >
        Send
        <GiQuillInk siz={32} />
      </button>
    </div>
  );
};

export default AddCommentInput;
