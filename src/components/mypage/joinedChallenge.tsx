import styled from 'styled-components';
import { recentDocs } from 'docs/main/recentDocs';
import ChallengeCard from './ChallengeCard';
function JoinedChallenge() {
  return (
    <>
      <ChallengeContainer>
        <PartTitle>참여했었던 챌린지</PartTitle>
        <ChallengeWrapper>
          {recentDocs.map((ch) => (
            <ChallengeCard
              title={ch.title}
              user={ch.user}
              likeNum={ch.like}
              img={ch.img}
            ></ChallengeCard>
          ))}
        </ChallengeWrapper>
      </ChallengeContainer>
    </>
  );
}

const PartTitle = styled.p`
  font-size: 28px;
  font-weight: bold;

  margin-bottom: 60px;
`;

const ChallengeContainer = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  padding-left: 10%;
`;

const ChallengeWrapper = styled.div`
  height: 310px;
  display: flex;
  flex-direction: row;
  overflow: auto;
  white-space: nowrap;
`;
export default JoinedChallenge;
