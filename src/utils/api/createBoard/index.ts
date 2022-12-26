import instance from 'utils/axios';
import { createBoardType } from 'utils/interface/createBoard/createBoard';

export const createBoard = async (
  challenge_id: string,
  createBoardObj: createBoardType,
) => {
  console.log(createBoardObj);
  try {
    await instance.post(`/challenge/${challenge_id}/post`, createBoardObj);
  } catch (error: any) {
    throw error;
  }
};
