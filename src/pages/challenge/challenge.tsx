import { calendar, bulletinBoard, challengers } from 'assets';
import ChallengeInfoSection from 'components/common/challengeInfoSection/challengeInfoSection';
import { useLayoutEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { getChallengeData } from 'utils/functions/challenge/challenge';
import { challengeInfoType } from 'utils/interface/challenge/challenge';

const Challenge = (): JSX.Element => {
  const navigate = useNavigate();
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

  const challengeId = useParams().challengeId as string;

  const getData = async () => {
    setChallengeData(await getChallengeData(challengeId));
  };

  const toCalendarPage = () => navigate(`/challenge/${challengeId}/calendar`);
  const toBoardPage = () => navigate(`/challenge/${challengeId}/board`);
  const toChallengersPage = () =>
    navigate(`/challenge/${challengeId}/challengers`);

  useLayoutEffect(() => {
    getData();
  }, []);

  return (
    <ChallengeMainPage>
      <ChallengeInfoSection challengeData={challengeData} />
      <Title>페이지 선택하기</Title>
      <PageCardSection>
        <PageCard>
          <CardTitle>캘린더 보기</CardTitle>
          <ImgIcon img={calendar} />
          <Description>
            {'다른 챌린저들의 챌린지 목표 달성\n현황을 확인하고 동참해보세요'}
          </Description>
          <ShortcutButton onClick={toCalendarPage}>바로가기</ShortcutButton>
        </PageCard>
        <PageCard>
          <CardTitle>자유 게시판</CardTitle>
          <ImgIcon img={bulletinBoard} />
          <Description>
            {'다른 챌린저들과 챌린지에 대해\n자유롭게 소통해보세요'}
          </Description>
          <ShortcutButton onClick={toBoardPage}>바로가기</ShortcutButton>
        </PageCard>
        <PageCard>
          <CardTitle>챌린저 목록</CardTitle>
          <ImgIcon img={challengers} />
          <Description>
            {'나와 함께 챌린지를 진행하는\n챌린저들을 확인해보세요'}
          </Description>
          <ShortcutButton onClick={toChallengersPage}>바로가기</ShortcutButton>
        </PageCard>
      </PageCardSection>
    </ChallengeMainPage>
  );
};

const ShortcutButton = styled.button`
  width: 40%;
  height: 34px;
  border: 1px solid ${theme.uiBlueColor};
  border-radius: 17px;
  background-color: white;
  font-size: 14px;
  color: ${theme.uiBlueColor};
  cursor: pointer;
`;

const Description = styled.p`
  width: 90%;
  font-size: 14px;
  text-align: center;
  white-space: pre-wrap;
  color: ${theme.uiBlueColor};
`;

const ImgIcon = styled.div`
  background-image: url(${({ img }: { img: string }) => img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 33%;
  aspect-ratio: 1;
`;

const CardTitle = styled.p`
  font-size: 22px;
  color: ${theme.uiBlueColor};
  font-weight: bolder;
`;

const PageCard = styled.div`
  width: 100%;
  aspect-ratio: 3/4;
  background-color: white;
  border: 1px solid #e1e1e1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);

  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
`;

const PageCardSection = styled.section`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
`;

const Title = styled.h1`
  font-size: 26px;
  margin-top: 80px;
  margin-bottom: 80px;
`;

const ChallengeMainPage = styled.main`
  width: 65%;
  height: fit-content;
  min-height: 100px;
  margin: 0 auto;
  margin-bottom: 300px;
`;

export default Challenge;
