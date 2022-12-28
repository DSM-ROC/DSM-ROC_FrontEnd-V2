import instance from 'utils/axios';

export const joinChallenge = async (challenge_id: string) => {
  try {
    await instance.post(`/challenge/${challenge_id}`);
  } catch (error: any) {
    throw error;
  }
};
