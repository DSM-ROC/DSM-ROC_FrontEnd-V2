import styled from 'styled-components';
import { theme } from 'styles/theme';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { challengeListSlicer } from 'utils/store/challengeList/selector/challengeListSlicer';
import { Link } from 'react-router-dom';
import ChallengeCard from 'components/challengeCard/challengeCard';

export default function Recent() {
  const [slicerLength, setSlicerLength] = useState<number>(8);
  const allChallengeInfo = useRecoilValue(challengeListSlicer(slicerLength));

  return (
    <Container>
      <Wrapper>
        <Summary>최근에 만들어진 챌린지🌱</Summary>
        <Cover>
          {allChallengeInfo.map((chellenge, i) => (
            <ChallengeCard chellenge={chellenge} key={i} />
          ))}
        </Cover>
        <Link to="/challenge">
          <Route>모든 챌린지 보러가기</Route>
        </Link>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  color: ${theme.darkGray};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 80%;
  margin-top: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const Summary = styled.h2`
  width: 100%;
  margin-bottom: 60px;
  font-size: 30px;
  text-align: start;
  color: ${theme.blackContentColor};
`;

const Cover = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 40px;
  justify-items: center;
`;

const Route = styled.p`
  width: 100%;
  margin-top: 20px;
  text-decoration: underline;
  text-align: end;
  font-size: 16px;
  font-weight: 500;
  color: ${theme.blackContentColor};
`;
