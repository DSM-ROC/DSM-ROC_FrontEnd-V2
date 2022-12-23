import styled from 'styled-components';
import { theme } from 'styles/theme';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { challengeListSlicer } from 'utils/store/challengeList/selector/challengeListSlicer';

export default function Recent() {
  const [slicerLength, setSlicerLength] = useState<number>(8);
  const allChallengeInfo = useRecoilValue(challengeListSlicer(slicerLength));

  return (
    <Container>
      <Wrapper>
        <Summary>최근에 만들어진 챌린지🌱</Summary>
        <Cover>
          {allChallengeInfo.map((ch, i) => (
            <Frame key={i}>
              <Image src={ch.coverImage}></Image>
              <Text>
                <Title>{ch.name}</Title>
                <Content>
                  <User>{ch.user.nickname}</User>
                </Content>
              </Text>
            </Frame>
          ))}
        </Cover>
        <Route>모든 챌린지 보러가기</Route>
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

const Frame = styled.div`
  width: 260px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  background-color: ${theme.whiteContentColor};
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 4px;
`;

const Text = styled.div`
  width: 100%;
  margin: 12px 0 16px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

const Title = styled.p`
  width: 90%;
  font-size: 18px;
  font-weight: 700;
`;

const Content = styled.div`
  width: 90%;
  margin-top: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const User = styled.p`
  font-size: 12px;
  font-weight: 600;
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
