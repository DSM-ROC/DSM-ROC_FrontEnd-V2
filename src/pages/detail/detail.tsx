import ChallengeInfoSection from 'components/common/challengeInfoSection/challengeInfoSection';
import Content from 'components/detail/content';
import { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getChallengeData } from 'utils/functions/challenge/challenge';
import { challengeInfoType } from 'utils/interface/challenge/challenge';

const Detail = (): JSX.Element => {
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

  const { challengeId } = useParams();

  const getData = async () => {
    setChallengeData(await getChallengeData(challengeId as string));
  };

  useLayoutEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <ChallengeInfoSection challengeData={challengeData} />
      <Content challengeData={challengeData} />
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 68%;
  margin: 0 auto;
`;
