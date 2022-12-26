import instance from 'utils/axios';
import { myJoinedChallengeType } from 'utils/interface/myJoinedChallenge';

export const getMyChallengeList = async (): Promise<
  myJoinedChallengeType[]
> => {
  try {
    const { data } = await instance.get(`/challenge/me`);
    return data;
  } catch (error) {
    throw error;
  }
};
