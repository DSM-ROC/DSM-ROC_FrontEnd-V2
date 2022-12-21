import AddComment from 'components/challenge/comments/addComment';
import CommentList from 'components/challenge/comments/commentList';
import ChallengeInfoSection from 'components/common/challengeInfoSection/challengeInfoSection';
import { useLayoutEffect, useRef, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { getChallengeData } from 'utils/functions/challenge/challenge';
import { challengeInfoType } from 'utils/interface/challenge/challenge';

const Comments = (): JSX.Element => {
  const addCommentInputRef = useRef<HTMLInputElement>(null);
  const [searchParams] = useSearchParams();
  const dateStr: string = searchParams.get('date') as string;
  const [year, month, date] = dateStr.split('-');
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

    user: {
      nickname: '',
    },
  });

  const { challengeId } = useParams();

  const getData = async () => {
    setChallengeData(await getChallengeData(challengeId as string));
  };

  useLayoutEffect(() => {
    getData();
  }, []);

  return (
    <CommentsPage>
      <ChallengeInfoSection challengeData={challengeData} />
      <Title>
        오늘의 메모🔥 - {year}년 {Number(month)}월 {Number(date)}일
      </Title>
      <AddComment addCommentInputRef={addCommentInputRef} />
      <CommentList addCommentInputRef={addCommentInputRef} />
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
