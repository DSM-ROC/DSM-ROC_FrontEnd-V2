import { format } from 'date-fns';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { boardType } from 'utils/interface/board';

interface props {
  board: boardType;
}

export default function Post({ board }: props) {
  return (
    <Container>
      <Title>{board.title}</Title>
      <Frame>
        <User>{board.user.nickname}</User>
        <Date>{format(board.createdAt, 'yyyy.MM.dd')}</Date>
      </Frame>
      <Content>{board.text}</Content>
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
  width: 100%;
  word-break: break-all;
  white-space: pre-wrap;
`;
