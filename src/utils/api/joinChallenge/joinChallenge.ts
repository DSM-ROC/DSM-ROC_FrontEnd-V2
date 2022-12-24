import { toast } from 'react-toastify';
import instance from 'utils/axios';
import ToastError from 'utils/functions/errorMessage';

export const joinChallenge = async (challenge_id: string): Promise<boolean> => {
  try {
    await instance.post(`/challenge/${challenge_id}`);
    toast.success('챌린지에 가입했어요!');
    return true;
  } catch (error: any) {
    ToastError('챌린지에 참가할 수 없습니다!');
    return false;
  }
};
