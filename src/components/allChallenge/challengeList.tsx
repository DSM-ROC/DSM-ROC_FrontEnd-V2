import styled from 'styled-components';
import { allChallengeDocs } from 'docs/allChallenge/allChallengeDocs';
import { theme } from 'styles/theme';
import { background } from 'assets';
import { falseLike } from 'assets';
import { trueLike } from 'assets';
import { useState } from 'react';

export default function ChallengeList() {
  const [like, setLike] = useState(false);
  return (
    <Container>
      <Wrapper>
        <TextBox>
          <Text>최신순</Text>
          <Text>인기순</Text>
        </TextBox>
        <Frame>
          {allChallengeDocs.map((ch, i) => (
            <Cover key={i}>
              <Image src={background}></Image>
              <TextItem>
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
              </TextItem>
            </Cover>
          ))}
        </Frame>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 80vw;
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

const Cover = styled.div`
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

const TextItem = styled.div`
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
