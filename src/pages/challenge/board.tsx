import Post from 'components/challenge/board/post';
import ButtonBox from 'components/challenge/board/buttonBox';
import { getChallengeData } from 'utils/functions/challenge/challenge';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { challengeInfoType } from 'utils/interface/challenge/challenge';
import ChallengeInfoSection from 'components/common/challengeInfoSection/challengeInfoSection';
import styled from 'styled-components';
import PostList from 'components/challenge/board/postList';

const Board = (): JSX.Element => {
  const challengeId = useParams().challengeId as string;
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
    const res = await getChallengeData(challengeId);
    setChallengeData(res);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <BoardPage>
      <ChallengeInfoSection challengeData={challengeData} />
      <ButtonBox />
      <PostList />
    </BoardPage>
  );
};

const BoardPage = styled.main`
  width: 65%;
  height: fit-content;
  min-height: 100px;
  margin: 0 auto;
  margin-bottom: 300px;
`;

export default Board;
