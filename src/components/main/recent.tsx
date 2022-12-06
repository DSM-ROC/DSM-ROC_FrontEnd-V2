import styled from 'styled-components';
import { recentDocs } from 'docs/main/recentDocs';
import { theme } from 'styles/theme';
import { background } from 'assets';
import { falseLike } from 'assets';
import { trueLike } from 'assets';
import { useState } from 'react';

export default function Recent() {
  const [like, setLike] = useState(false);
  return (
    <Container>
      <Wrapper>
        <Summary>최근에 만들어진 챌린지🌱</Summary>
        <Cover>
          {recentDocs.map((ch, i) => (
            <Frame key={i}>
              <Image src={background}></Image>
              <Text>
                <Title>{ch.title}</Title>
                <Content>
                  <User>{ch.user}</User>
                  <LikeBox>
                    <LikeNum>{ch.like}</LikeNum>
                    {like === false ? (
                      <FalseLike src={falseLike}></FalseLike>
                    ) : (
                      <TrueLike src={trueLike}></TrueLike>
                    )}
                  </LikeBox>
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
  width: 100vw;
  color: ${theme.darkGray};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 80vw;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Frame = styled.div`
  width: 260px;
  height: 100%;
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

const LikeBox = styled.div`
  gap: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LikeNum = styled.div`
  color: ${theme.uiRedColor};
  font-size: 14px;
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

const FalseLike = styled.img`
  width: 14px;
`;

const TrueLike = styled.img`
  width: 14px;
`;
