import styled from 'styled-components';

interface props {
  challengeData: {
    title: string;
    writer: string;
    period: string;
    tags: string[];
  };
}

const ChallengeInfoSection = ({ challengeData }: props): JSX.Element => {
  return (
    <ChallengeInfoContainer>
      <ChallengeTitle>{challengeData.title}</ChallengeTitle>
      <WriteInfo>
        <Writer>{challengeData.writer}</Writer>
        <Period>{challengeData.period}</Period>
      </WriteInfo>
      <Tags>
        {challengeData.tags.map((tag, i) => (
          <Tag key={i}>{tag}</Tag>
        ))}
      </Tags>
    </ChallengeInfoContainer>
  );
};

const Tag = styled.div`
  width: fit-content;
  height: 30px;
  padding: 0 15px;

  font-size: 14px;
  color: #1c7ed6;

  border: #1c7ed6 1px solid;
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

  border-bottom: #5b5b5b 1px solid;

  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export default ChallengeInfoSection;
