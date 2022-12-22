type topicEnum =
  | '운동'
  | '스터디'
  | '독서'
  | '미술'
  | '음악'
  | '취업'
  | '자격증'
  | '코딩'
  | '기타';

export interface challengeInfoType {
  id: number;
  name: string;
  introduction: string;
  limitMember: number;
  joinMember: number;
  topic: topicEnum;
  startDay: Date;
  endDay: Date;
  coverImage: string;
  createdAt: Date;

  user: {
    id: string;
    nickname: string;
  };
}
