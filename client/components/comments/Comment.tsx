import Image from 'next/image';

import { IComment } from '../post-card/types';

interface IProps {
  comment: IComment;
}

const Comment = (props: IProps) => {
  const { comment } = props;
  return (
    <div className="flex gap-2 items-center ">
      <Image
        width={32}
        height={32}
        alt="user"
        src="/assets/defaultProfilePicture.png"
      />
      <div className="flex flex-col justify-center">
        <span className="text-md text-primary font-bold underline">
          {comment.user.fullName}
        </span>
        <p className="text-sm font-light leading-5 text-white">
          {comment.comment}
        </p>
      </div>
    </div>
  );
};

export default Comment;
