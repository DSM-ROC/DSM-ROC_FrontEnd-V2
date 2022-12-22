import { challengeCreateModel } from 'models/challengeCreate/challengeCreate';
import instance from 'utils/axios';

export const createChallenge = (createChallengeData: challengeCreateModel) => {
  try {
    instance.post('/challenge', createChallengeData);
  } catch (error) {
    throw error;
  }
};
