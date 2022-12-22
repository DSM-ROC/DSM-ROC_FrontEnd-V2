import instance from 'utils/axios';

export const createChallenge = (createChallengeData: FormData) => {
  try {
    instance.post('/challenge', createChallengeData, {
      headers: {
        'content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    throw error;
  }
};
