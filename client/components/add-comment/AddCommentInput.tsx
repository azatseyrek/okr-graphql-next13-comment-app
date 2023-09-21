'use client';

import { useState } from 'react';

import { INSERT_COMMENT_MUTATION } from '@/graphql/mutations';
import { useMutation } from '@apollo/client';
import { GiQuillInk } from 'react-icons/gi';

interface IProps {
  postId: number;
}

const AddCommentInput = (props: IProps) => {
  const { postId } = props;

  // get user from context

  const [commentText, setCommentText] = useState<string>('');
  const [addComment] = useMutation(INSERT_COMMENT_MUTATION);

  const handleSendComment = async (e: React.FormEvent) => {
    e.preventDefault();

    const comment = commentText;
    const post_id = postId;
    const user_id = 2; // change it with authenticated user from context

    try {
      const { data } = await addComment({
        variables: { comment, post_id, user_id },
      });
      setCommentText('');
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <textarea
        className="textarea textarea-neutral border-secondary text-lg w-full border-4 resize-none"
        rows={4}
        maxLength={300}
        placeholder="Your comment..."
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      ></textarea>
      <button
        onClick={handleSendComment}
        className="btn btn-neutral w-32 self-end"
      >
        Send
        <GiQuillInk siz={32} />
      </button>
    </div>
  );
};

export default AddCommentInput;
