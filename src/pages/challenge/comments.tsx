import AddComment from 'components/challenge/comments/addComment';
import CommentList from 'components/challenge/comments/commentList';
import ChallengeInfoSection from 'components/common/challengeInfoSection/challengeInfoSection';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const challengeData = {
  title: 'React 공부하기',
  writer: '배준수',
  period: '2022.11.22 ~ 2022.12.22',
  tags: [
    'React',
    'Programing',
    'Study',
    'TypeScript',
    'TypeScriptTypeScriptTypeScriptTypeScript',
  ],
};

const Comments = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  const dateStr: string = searchParams.get('date') as string;
  const [year, month, date] = dateStr.split('-');

  return (
    <CommentsPage>
      <ChallengeInfoSection challengeData={challengeData} />
      <Title>
        오늘의 메모🔥 - {year}년 {Number(month)}월 {Number(date)}일
      </Title>
      <AddComment />
      <CommentList />
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
