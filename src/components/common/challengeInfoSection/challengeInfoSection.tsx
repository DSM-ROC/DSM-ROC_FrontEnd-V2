import { format } from 'date-fns';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { challengeInfoType } from 'utils/interface/challenge/challenge';

interface props {
  challengeData: challengeInfoType;
}

const ChallengeInfoSection = ({ challengeData }: props): JSX.Element => {
  return challengeData.name ? (
    <ChallengeInfoContainer>
      <ChallengeTitle>{challengeData.name}</ChallengeTitle>
      <WriteInfo>
        <Writer>{challengeData.user.nickname}</Writer>
        <Line />
        <Period>{`${format(challengeData.startDay, 'yyyy.MM.dd')} ~ ${format(
          challengeData.endDay,
          'yyyy.MM.dd',
        )}`}</Period>
      </WriteInfo>
      <Tags>
        <Tag>{challengeData.topic}</Tag>
      </Tags>
    </ChallengeInfoContainer>
  ) : (
    <></>
  );
};

const Line = styled.div`
  height: 14px;
  width: 1.5px;
  background-color: black;
`;

const Tag = styled.div`
  width: fit-content;
  height: 30px;
  padding: 0 15px;

  font-size: 14px;
  color: ${theme.mainBlueColor};

  border: ${theme.mainBlueColor} 1px solid;
  border-radius: 15px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Tags = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const Period = styled.p`
  font-size: 14px;
  margin: 0;
`;

const Writer = styled(Period)`
  font-size: 14px;
  font-weight: bold;
`;

const ChallengeTitle = styled.h1`
  font-size: 40px;
  margin: 0;
`;

const WriteInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ChallengeInfoContainer = styled.section`
  width: 100%;
  height: fit-content;
  padding-bottom: 30px;
  margin-top: 50px;

  border-bottom: ${theme.darkGray} 1px solid;

  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export default ChallengeInfoSection;
