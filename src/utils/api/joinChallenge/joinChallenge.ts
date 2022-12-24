import instance from 'utils/axios';
import ToastError from 'utils/functions/errorMessage';

export const joinChallenge = async (challenge_id: string) => {
  try {
    await instance.post(`/challenge/${challenge_id}`);
  } catch (error: any) {
    ToastError('챌린지에 참가할 수 없습니다!');
  }
};
