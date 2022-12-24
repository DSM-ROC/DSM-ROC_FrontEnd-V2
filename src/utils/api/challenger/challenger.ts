import instance from 'utils/axios';
import { challengerTpye } from 'utils/interface/challenger/challenger';

export const getChallenger = async (
  challenge_id: string,
): Promise<challengerTpye[]> => {
  try {
    const { data } = await instance.get(`/challenge/${challenge_id}/member`);
    return data;
  } catch (error) {
    throw error;
  }
};
