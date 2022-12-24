import instance from 'utils/axios';

export const addComment = async (text: string, challenge_id: number) => {
  try {
    await instance.post(`challenge/${challenge_id}/review`, { text: text });
  } catch (error) {
    throw error;
  }
};

export const deleteComment = async (
  challenge_id: number,
  review_id: number,
) => {
  try {
    await instance.delete(`challenge/${challenge_id}/review/${review_id}`);
  } catch (error) {
    throw error;
  }
};
