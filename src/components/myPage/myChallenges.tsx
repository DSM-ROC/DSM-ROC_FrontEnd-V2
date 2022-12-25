import ChallengeCard from 'components/challengeCard/challengeCard';
import styled from 'styled-components';
import { challengeInfoType } from 'utils/interface/challenge/challenge';

const data: challengeInfoType[] = [
  {
    id: 1,
    name: '프론트엔드 공부하기',
    introduction: 'next 사용합니다',
    coverImage: '',
    limitMember: 7,
    startDay: new Date('2022-12-22T15:00:00.000Z'),
    endDay: new Date('2022-12-29T15:00:00.000Z'),
    topic: '코딩',
    createdAt: new Date('2022-12-23T06:12:51.906Z'),
    user: {
      id: '4',
      nickname: 'testUser2',
    },
    joinMember: 0,
  },
  {
    id: 1,
    name: '프론트엔드 공부하기',
    introduction: 'next 사용합니다',
    coverImage: '',
    limitMember: 7,
    startDay: new Date('2022-12-22T15:00:00.000Z'),
    endDay: new Date('2022-12-29T15:00:00.000Z'),
    topic: '코딩',
    createdAt: new Date('2022-12-23T06:12:51.906Z'),
    user: {
      id: '4',
      nickname: 'testUser2',
    },
    joinMember: 0,
  },
  {
    id: 1,
    name: '프론트엔드 공부하기',
    introduction: 'next 사용합니다',
    coverImage: '',
    limitMember: 7,
    startDay: new Date('2022-12-22T15:00:00.000Z'),
    endDay: new Date('2022-12-29T15:00:00.000Z'),
    topic: '코딩',
    createdAt: new Date('2022-12-23T06:12:51.906Z'),
    user: {
      id: '4',
      nickname: 'testUser2',
    },
    joinMember: 0,
  },
  {
    id: 1,
    name: '프론트엔드 공부하기',
    introduction: 'next 사용합니다',
    coverImage: '',
    limitMember: 7,
    startDay: new Date('2022-12-22T15:00:00.000Z'),
    endDay: new Date('2022-12-29T15:00:00.000Z'),
    topic: '코딩',
    createdAt: new Date('2022-12-23T06:12:51.906Z'),
    user: {
      id: '4',
      nickname: 'testUser2',
    },
    joinMember: 0,
  },
];

const MyChallenges = () => {
  return (
    <MyChallengeSection>
      <SectionTitle>회원 정보</SectionTitle>
      <ChallengesWrap>
        {data.map((challenge, i) => (
          <ChallengeCard challenge={challenge} />
        ))}
      </ChallengesWrap>
    </MyChallengeSection>
  );
};

const ChallengesWrap = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  gap: 50px;
  overflow-x: scroll;
`;

const SectionTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-top: 70px;
  margin-bottom: 60px;
`;

const MyChallengeSection = styled.section`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;

  padding-bottom: 50px;
`;

export default MyChallenges;
