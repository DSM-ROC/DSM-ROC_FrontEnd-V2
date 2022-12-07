import AddComment from 'components/challenge/comments/addComment';
import ChallengeInfoSection from 'components/common/challengeInfoSection/challengeInfoSection';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const Comments = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  const dateStr: string = searchParams.get('date') as string;
  const [year, month, date] = dateStr.split('-');

  return (
    <CommentsPage>
      <Title>
        오늘의 메모🔥 - {year}년 {Number(month)}월 {Number(date)}일
      </Title>
      <AddComment />
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
