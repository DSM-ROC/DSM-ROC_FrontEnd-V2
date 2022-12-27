import { deleteIcon, like, liked } from 'assets';
import { format } from 'date-fns';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { deleteBoard, getBoardList } from 'utils/api/board';
import { postLike } from 'utils/api/postLike';
import { boardType } from 'utils/interface/board';
import { boardListRecoil } from 'utils/store/board';

interface props {
  board: boardType;
  isMyPost: boolean;
}

export default function Post({ board, isMyPost }: props) {
  const challengeId = useParams().challengeId as string;
  const setBoardList = useSetRecoilState(boardListRecoil);

  const [isLike, setIsLike] = useState<boolean>(false);

  const reloadData = async () => {
    const boardRes = await getBoardList(challengeId);
    setBoardList(boardRes);
  };

  const deletePost = async () => {
    if (window.confirm('게시글을 삭제합니다')) {
      await deleteBoard(challengeId, String(board.id));

      await reloadData();
    }
  };

  const onLike = async () => {
    await postLike(challengeId, board.id);
    await reloadData();
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
      <LikeButtonWrap>
        <LikeCount>{board.likeCount}</LikeCount>
        <LikeButton onClick={onLike} isLike={isLike ? liked : like} />
      </LikeButtonWrap>
    </Container>
  );
}

const LikeCount = styled.p`
  font-size: 20px;
`;
const LikeButton = styled.button`
  width: 20px;
  aspect-ratio: 1;
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${({ isLike }: { isLike: string }) => isLike});
  border: none;
  transition: 0.2s;
  cursor: pointer;

  &:active {
    transform: scale(1.1);
  }
`;

const LikeButtonWrap = styled.div`
  position: absolute;
  bottom: 25px;
  right: 30px;

  display: flex;
  align-items: center;
  gap: 7px;
`;

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
  padding-bottom: 60px;
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
