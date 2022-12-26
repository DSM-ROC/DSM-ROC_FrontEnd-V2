import { boardCommentType } from './../../interface/boardComment/index';
import instance from 'utils/axios';
import { boardType } from 'utils/interface/board';

export const getBoardList = async (
  challengeId: string,
): Promise<boardType[]> => {
  try {
    const { data } = await instance.get(`/challenge/${challengeId}/post`);
    return data
      .map((board: boardType) => {
        const commentData: boardCommentType[] = board.comment.map(
          (comment: boardCommentType) => ({
            text: comment.text,
            createdAt: new Date(comment.createdAt),
            updatedAt: new Date(comment.updatedAt),
            user: {
              nickname: comment.user.nickname,
            },
          }),
        );

        return {
          id: board.id,
          title: board.title,
          text: board.text,
          createdAt: new Date(board.createdAt),
          updatedAt: new Date(board.updatedAt),
          user: {
            nickname: board.user.nickname,
          },
          challenge: {
            name: board.challenge.name,
          },
          comment: commentData,
          likeCount: board.likeCount,
        };
      })
      .sort(
        (a: boardType, b: boardType) =>
          b.createdAt.getTime() - a.createdAt.getTime(),
      );
  } catch (error) {
    throw error;
  }
};

export const deleteBoard = async (challengeId: string, commentId: string) => {
  try {
    await instance.delete(`/challenge/${challengeId}/post/${commentId}`);
  } catch (error) {
    throw error;
  }
};
