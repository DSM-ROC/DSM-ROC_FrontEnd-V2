import { topicEnum } from '../topic/topic';

export interface challengeInfoType {
  id: number;
  name: string;
  introduction: string;
  coverImage: string;
  limitMember: number;
  joinMember: number;
  topic: topicEnum;
  startDay: Date;
  endDay: Date;
  createdAt: Date;

  user: {
    id: string;
    nickname: string;
  };
}
