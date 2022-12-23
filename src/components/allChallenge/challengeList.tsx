import styled from 'styled-components';
import ChallengeCard from 'components/challengeCard/challengeCard';
import { useRecoilValue } from 'recoil';
import { challengeListRecoil } from 'utils/store/challengeList/challengeList';

export default function ChallengeList() {
  const challengeList = useRecoilValue(challengeListRecoil);
  return (
    <Container>
      <Wrapper>
        <TextBox>
          <Text>최신순</Text>
          <Text>인기순</Text>
        </TextBox>
        <Frame>
          {challengeList.map((challenge, i) => (
            <ChallengeCard challenge={challenge} key={i} />
          ))}
        </Frame>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 80%;
`;

const TextBox = styled.ul`
  width: 100%;
  margin-top: 80px;
  gap: 30px;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const Text = styled.li`
  font-weight: 600;
`;

const Frame = styled.div`
  width: 100%;
  margin: 40px 0 170px;
  display: grid;
  grid-template-columns: repeat(4, 25.8%);
  grid-row-gap: 80px;
`;
