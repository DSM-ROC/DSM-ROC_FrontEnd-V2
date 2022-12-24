import styled from 'styled-components';
import { speaker } from 'assets';

export default function Banner() {
  return (
    <Container>
      <Wrapper>
        <TextBox>
          <Page>ROC 메인페이지</Page>
          <Title>ROC와 함께할 </Title>
          <Title>챌린저들을 모집합니다!</Title>
          <Content>공동의 목표를 정하고 함께 목표를 실현합니다</Content>
        </TextBox>
        <Image src={speaker}></Image>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #1c7ed6;
`;

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextBox = styled.div``;

const Page = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 40px;
`;

const Content = styled.p`
  margin-bottom: 20px;
  font-size: 26px;
`;

const Image = styled.img`
  width: 380px;
`;
