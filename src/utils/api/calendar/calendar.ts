import instance from 'utils/axios';

export const getCommentList = async (challenge_id: number) => {
  instance
    .get(`/challenge/${challenge_id}/review`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};
