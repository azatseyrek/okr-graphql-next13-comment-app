import React, { useState } from 'react';

import { INSERT_POST_MUTATION } from '@/graphql/mutations';
import { useMutation } from '@apollo/client';
import { GiQuillInk } from 'react-icons/gi';

const AddNewPost = () => {
  const [postText, setPostText] = useState<string>('');
  const [addComment] = useMutation(INSERT_POST_MUTATION);

  const handleSendPost = async (e: React.FormEvent) => {
    e.preventDefault();

    const description = postText;
    const user_id = 2; // change it with authenticated user from context

    try {
      const { data } = await addComment({
        variables: { description, user_id },
      });
      setPostText('');
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col gap-2 w-full max-w-[60%]">
      <textarea
        className="textarea textarea-neutral border-secondary text-lg w-full border-4 resize-none"
        rows={4}
        maxLength={300}
        placeholder="Send a post."
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
      ></textarea>
      <button
        onClick={handleSendPost}
        className="btn btn-neutral w-32 self-end"
      >
        Post
        <GiQuillInk siz={32} />
      </button>
    </div>
  );
};

export default AddNewPost;
