import React from 'react';

import { GiQuillInk } from 'react-icons/gi';

const AddCommentInput = () => {
  return (
    <div className="relative flex flex-col gap-2">
      <textarea
        className="textarea textarea-neutral border-neutral text-md w-full border-4"
        rows={4}
        maxLength={500}
        placeholder="Write a comment"
      ></textarea>
      <button className="btn btn-neutral absolute bottom-2 right-2 self-end">
        Add Comment
        <GiQuillInk siz={32} />
      </button>
    </div>
  );
};

export default AddCommentInput;
