import { getCommentList } from 'utils/api/comment/commentList';
import { commentDataType } from 'utils/interface/comment/comment';
import { isSameDate } from '../isSameDate/isSameDate';

export const saveCommentList = async (challengeId: number, date: Date) => {
  const commentList = (await getCommentList(challengeId))
    .filter((comment: commentDataType) => isSameDate(date, comment.createdAt))
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

  return commentList;
};
