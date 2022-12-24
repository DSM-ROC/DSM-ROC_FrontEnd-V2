import instance from 'utils/axios';
import { commentDataType } from 'utils/interface/comment/comment';

export const getCommentList = async (
  challenge_id: number,
): Promise<commentDataType[]> => {
  try {
    const { data } = await instance.get(`/challenge/${challenge_id}/review`);

    return data.map((comment: commentDataType) => ({
      id: comment.id,
      text: comment.text,
      createdAt: new Date(comment.createdAt),
      updatedAt: new Date(comment.updatedAt),
      user: {
        id: comment.user.id,
        nickname: comment.user.nickname,
      },
      challenge: {
        name: comment.challenge.name,
      },
    }));
  } catch (error) {
    throw error;
  }
};
