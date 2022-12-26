import instance from 'utils/axios';
import { challengeInfoType } from 'utils/interface/challenge/challenge';

export const challengeSearch = async (
  searchText: string,
): Promise<challengeInfoType[]> => {
  try {
    const { data } = await instance.get(
      `/challenge/search?where=${searchText}`,
    );

    const newData: challengeInfoType[] = data.map(
      (challengeInfo: challengeInfoType) => ({
        id: challengeInfo.id,
        name: challengeInfo.name,
        introduction: challengeInfo.introduction,
        coverImage: challengeInfo.coverImage,
        limitMember: challengeInfo.limitMember,
        joinMember: challengeInfo.joinMember,
        topic: challengeInfo.topic,
        startDay: new Date(challengeInfo.startDay),
        endDay: new Date(challengeInfo.endDay),
        createdAt: new Date(challengeInfo.createdAt),
        user: {
          id: challengeInfo.user.id,
          nickname: challengeInfo.user.nickname,
        },
      }),
    );

    return newData;
  } catch (error) {
    throw error;
  }
};
