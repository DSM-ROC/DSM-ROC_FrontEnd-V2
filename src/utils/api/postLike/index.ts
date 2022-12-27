import instance from 'utils/axios';

export const postLike = async (challengeId: string, boardId: number) => {
  try {
    await instance.post(`/challenge/${challengeId}/post/${boardId}/like`);
  } catch (error) {
    throw error;
  }
};
