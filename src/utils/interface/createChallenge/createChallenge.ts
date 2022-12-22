import { topicEnum } from 'utils/interface/topic/topic';

export interface createChallengeType {
  name: string;
  introduction: string;
  password: string;
  startDay: string;
  endDay: string;
  limitMember: number;
  topic: topicEnum;
}
