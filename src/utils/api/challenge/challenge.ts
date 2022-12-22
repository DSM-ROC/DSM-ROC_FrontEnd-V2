import instance from 'utils/axios';
import { challengeInfoType } from 'utils/interface/challenge/challenge';

export const getChallengeInfo = async (
  challenge_id: number,
): Promise<challengeInfoType> => {
  try {
    const { data } = await instance.get(`/challenge/${challenge_id}`);

    const newData: challengeInfoType = {
      id: data.id,
      name: data.name,
      introduction: data.introduction,
      limitMember: data.limitMember,
      joinMember: data.joinMember,
      topic: data.topic,
      startDay: new Date(data.startDay),
      endDay: new Date(data.endDay),
      createdAt: new Date(data.createdAt),
      coverImage: data.coverImage ?? '',
      user: {
        id: data.user.id,
        nickname: data.user.nickname,
      },
    };

    return newData;
  } catch (err) {
    throw err;
  }
};
