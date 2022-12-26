import { deleteIcon } from 'assets';
import { format } from 'date-fns';
import { useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { deleteBoard, getBoardList } from 'utils/api/board';
import { boardType } from 'utils/interface/board';
import { boardListRecoil } from 'utils/store/board';

interface props {
  board: boardType;
  isMyPost: boolean;
}

export default function Post({ board, isMyPost }: props) {
  const challengeId = useParams().challengeId as string;
  const setBoardList = useSetRecoilState(boardListRecoil);

  const deletePost = async () => {
    if (window.confirm('게시글을 삭제합니다')) {
      await deleteBoard(challengeId, String(board.id));

      const boardRes = await getBoardList(challengeId);
      setBoardList(boardRes);
    }
  };

  return (
    <Container>
      <Title>{board.title}</Title>
      <Frame>
        <User>{board.user.nickname}</User>
        <Date>{format(board.createdAt, 'yyyy.MM.dd')}</Date>
      </Frame>
      <Content>{board.text}</Content>
      {isMyPost && <PostDeleteButton onClick={deletePost} />}
    </Container>
  );
}

const PostDeleteButton = styled.button`
  position: absolute;
  top: 25px;
  right: 30px;
  background-image: url(${deleteIcon});
  background-position: center;
  border: none;
  background-color: transparent;
  background-size: contain;
  background-repeat: no-repeat;
  width: 20px;
  aspect-ratio: 1;

  cursor: pointer;
`;

const Container = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 40px;
  border: 1px solid ${theme.darkGray};
  position: relative;
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
