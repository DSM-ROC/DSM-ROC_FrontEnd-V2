import instance from 'utils/axios';

export const createChallenge = async (
  createChallengeData: FormData,
): Promise<string> => {
  try {
    const { data } = await instance.post('/challenge', createChallengeData, {
      headers: {
        'content-Type': 'multipart/form-data',
      },
    });
    return data.challengeId;
  } catch (error) {
    throw error;
  }
};
