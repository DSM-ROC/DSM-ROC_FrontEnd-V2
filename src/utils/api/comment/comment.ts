import instance from 'utils/axios';

export const addComment = async (text: string, challenge_id: number) => {
  try {
    await instance.post(`challenge/${challenge_id}/review`, { text: text });
  } catch (error) {
    throw error;
  }
};
