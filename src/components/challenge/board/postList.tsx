import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getBoardList } from 'utils/api/board';
import { boardType } from 'utils/interface/board';
import Post from './post';

const PostList = () => {
  const challengeId = useParams().challengeId as string;
  const [boardList, setBoardList] = useState<boardType[]>([]);

  const getData = async () => {
    const res = await getBoardList(challengeId);
    setBoardList(res);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <PostListSection>
      {boardList.map((board: boardType) => (
        <Post key={board.id} board={board} />
      ))}
    </PostListSection>
  );
};

const PostListSection = styled.div`
  width: 100%;
  display: flex;

  flex-direction: column;
  gap: 50px;
  margin-top: 120px;
`;

export default PostList;
