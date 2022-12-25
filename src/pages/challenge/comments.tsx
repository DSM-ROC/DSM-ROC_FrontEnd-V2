import AddComment from 'components/challenge/comments/addComment';
import CommentList from 'components/challenge/comments/commentList';
import ChallengeInfoSection from 'components/common/challengeInfoSection/challengeInfoSection';
import { useLayoutEffect, useRef, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { getChallengeData } from 'utils/functions/challenge/challenge';
import { challengeInfoType } from 'utils/interface/challenge/challenge';
import { commentListRecoil } from 'utils/store/commentList/commentList';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { saveCommentList } from 'utils/functions/comment/comment';

const Comments = (): JSX.Element => {
  const navigate = useNavigate();

  const addCommentInputRef = useRef<HTMLInputElement>(null);
  const [searchParams] = useSearchParams();
  const setCommentList = useSetRecoilState(commentListRecoil);
  const challengeId = useParams().challengeId as string;
  const dateStr = searchParams.get('date') as string;
  const date = new Date(dateStr);
  const commentDateList = useRecoilValue(commentListRecoil);

  const [challengeData, setChallengeData] = useState<challengeInfoType>({
    id: 0,
    name: '',
    introduction: '',
    limitMember: 0,
    joinMember: 0,
    topic: '코딩',
    startDay: new Date(),
    endDay: new Date(),
    createdAt: new Date(),
    coverImage: '',
    user: {
      id: '',
      nickname: '',
    },
  });

  const getData = async () => {
    const res = await getChallengeData(challengeId as string);
    setChallengeData(res);
  };

  const getCommentData = async () => {
    setCommentList([...(await saveCommentList(parseInt(challengeId), date))]);
  };

  useLayoutEffect(() => {
    if (!/(\d{2})-(\d{2})-(\d{2})/.test(dateStr)) {
      navigate(-1);
    }
    getData();
    getCommentData();
  }, []);

  return (
    <CommentsPage>
      <ChallengeInfoSection challengeData={challengeData} />
      <Title>
        오늘의 메모🔥 - {date.getFullYear()}년 {Number(date.getMonth() + 1)}월{' '}
        {Number(date.getDate())}일
      </Title>
      <AddComment addCommentInputRef={addCommentInputRef} date={date} />
      <CommentList
        addCommentInputRef={addCommentInputRef}
        commentDateList={commentDateList}
      />
    </CommentsPage>
  );
};

const Title = styled.h1`
  font-size: 26px;
  margin-top: 80px;
  margin-bottom: 80px;
`;

const CommentsPage = styled.main`
  width: 65%;
  height: fit-content;
  min-height: 100px;
  margin: 0 auto;
  margin-bottom: 300px;
`;

export default Comments;
