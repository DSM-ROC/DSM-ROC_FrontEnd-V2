import { boardCommentType } from '../boardComment';

export interface boardType {
  id: number;
  title: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
  user: {
    nickname: string;
  };
  challenge: {
    name: string;
  };
  comment: boardCommentType[];
  likeCount: number;
}
