import styled from 'styled-components';
import { theme } from 'styles/theme';
import { list } from 'assets';

export default function Banner() {
  return (
    <Container>
      <Wrapper>
        <TextBox>
          <Page>ROC 챌린지 전체보기 페이지</Page>
          <Title>ROC와 함께하는</Title>
          <Title>챌린지를 확인해보세요</Title>
          <Content>공동의 목표를 정하고 함께 목표를 실현합니다</Content>
        </TextBox>
        <Image src={list}></Image>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: ${theme.mainBlueColor};
`;

const Wrapper = styled.div`
  width: 80vw;
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
  width: 400px;
`;
