export interface boardCommentType {
  text: string;
  createdAt: Date;
  updatedAt: Date;
  user: {
    nickname: string;
  };
}
