import styled from 'styled-components';
import { theme } from 'styles/theme';

export default function Post() {
  return (
    <Container>
      <Wrapper>
        <Title>React JS 너무 재밌네요</Title>
        <Frame>
          <User>안희명남승권</User>
          <Date>2022.12.25</Date>
        </Frame>
        <Content>오늘은 React JS hook에 대해 공부했습니다.</Content>
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
  width: 70%;
  margin-top: 120px;
  padding: 40px;
  border-radius: 8px;
  border: 1px solid ${theme.darkGray};
`;

const Title = styled.h2`
  font-size: 26px;
`;

const Frame = styled.div`
  gap: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const User = styled.p`
  font-size: 14px;
  font-weight: 800;
`;

const Date = styled.p`
  font-size: 14px;
`;

const Content = styled.p`
  margin-top: 50px;
`;
