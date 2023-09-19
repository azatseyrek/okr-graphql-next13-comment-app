export interface IUser {
  fullName: string;
}

export interface IComment {
  created_at: string;
  comment: string;
  user: IUser;
  id: number;
}

export interface IPost {
  id: number;
  created_at: Date;
  user: IUser;
  description: string;
  comments: IComment[];
  comments_aggregate: {
    aggregate: {
      count: number;
    };
  };
}
