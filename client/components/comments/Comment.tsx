import AddCommentInput from '../add-comment/AddCommentInput';
import { IComment } from '../post-card/types';

interface IProps {
  comment: IComment;
}

const Comment = (props: IProps) => {
  const { comment } = props;
  return (
    <div className="flex gap-2 items-center ">
      <img
        src="https://i.pravatar.cc/32"
        alt="profile"
        className="h-12 w-12 rounded-full object-cover"
      />
      <div className="flex flex-col justify-center">
        <span className="text-md text-primary font-bold underline">
          Azat Seyrek
        </span>
        <p className="text-sm font-light leading-5 text-white">
          {comment.comment}
        </p>
      </div>
    </div>
  );
};

export default Comment;
