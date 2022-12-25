import styled from 'styled-components';
import { theme } from 'styles/theme';

export default function Post() {
  return (
    <Container>
      <Title>React JS 너무 재밌네요</Title>
      <Frame>
        <User>user34</User>
        <Date>2022.12.25</Date>
      </Frame>
      <Content>
        오늘은 React JS hook에 대해 공부했습니다.오늘은 React JS hook에 대해
        공부했습니다.오늘은 React JS hook에 대해 공부했습니다.오늘은 React JS
        hook에 대해 공부했습니다.오늘은 React JS hook에 대해 공부했습니다.오늘은
        React JS hook에 대해 공부했습니다.오늘은 React JS hook에 대해
        공부했습니다. 오늘은 React JS hook에 대해 공부했습니다.오늘은 React JS
        hook에 대해 공부했습니다.오늘은 React JS hook에 대해 공부했습니다.오늘은
        React JS hook에 대해 공부했습니다.오늘은 React JS hook에 대해
        공부했습니다.오늘은 React JS hook에 대해 공부했습니다.오늘은 React JS
        hook에 대해 공부했습니다. 오늘은 React JS hook에 대해
        공부했습니다.오늘은 React JS hook에 대해 공부했습니다.오늘은 React JS
        hook에 대해 공부했습니다.오늘은 React JS hook에 대해 공부했습니다.오늘은
        React JS hook에 대해 공부했습니다.오늘은 React JS hook에 대해
        공부했습니다.오늘은 React JS hook에 대해 공부했습니다. 오늘은 React JS
        hook에 대해 공부했습니다.오늘은 React JS hook에 대해 공부했습니다.오늘은
        React JS hook에 대해 공부했습니다.오늘은 React JS hook에 대해
        공부했습니다.오늘은 React JS hook에 대해 공부했습니다.오늘은 React JS
        hook에 대해 공부했습니다.오늘은 React JS hook에 대해 공부했습니다.
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 40px;
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
  margin-top: 40px;
  white-space: pre-wrap;
`;
