import { topicEnum } from 'utils/interface/topic/topic';

export interface challengeCreateModel {
  name: string;
  introduction: string;
  password: string;
  image: FormData | null;
  startDay: string;
  endDay: string;
  limitMember: number;
  topic: topicEnum;
}
