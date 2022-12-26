import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getMyChallengeList } from 'utils/api/myChallenge';
import { myJoinedChallengeType } from 'utils/interface/myJoinedChallenge';
import JoinedChallenge from './joinedChallenge';

const MyChallenges = () => {
  const [myChallengeList, setMyChallengeList] = useState<
    myJoinedChallengeType[]
  >([]);

  const getData = async () => {
    const res = await getMyChallengeList();

    console.log(res);
    const data = {};

    setMyChallengeList(res);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <MyChallengeSection>
      <SectionTitle>회원 정보</SectionTitle>
      <ChallengesWrap>
        {myChallengeList.map((challenge, i) => (
          <JoinedChallenge challenge={challenge} />
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
