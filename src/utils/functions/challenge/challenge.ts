import { getChallengeInfo } from 'utils/api/challenge/challenge';
import { challengeInfoType } from 'utils/interface/challenge/challenge';

export const getChallengeData = async (challengeId: string) => {
  try {
    const response: challengeInfoType = await getChallengeInfo(
      parseInt(challengeId),
    );
    return response;
  } catch (error) {
    throw error;
  }
};
