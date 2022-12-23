import instance from 'utils/axios';
import { challengeInfoType } from 'utils/interface/challenge/challenge';

export const challengeSearch = async (
  searchText: string,
): Promise<challengeInfoType[]> => {
  try {
    const { data } = await instance.get(
      `/challenge/search?where=${searchText}`,
    );

    return data;
  } catch (error) {
    throw error;
  }
};
