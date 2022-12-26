import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { getBoardList } from 'utils/api/board';
import { getUserData } from 'utils/api/userData/userData';
import { boardType } from 'utils/interface/board';
import { userDataType } from 'utils/interface/user/user';
import { boardListRecoil } from 'utils/store/board';
import Post from './post';

const PostList = () => {
  const challengeId = useParams().challengeId as string;
  const [boardList, setBoardList] = useRecoilState(boardListRecoil);
  const [userData, setUserData] = useState<userDataType>({
    id: 0,
    nickname: '',
    email: '',
  });

  const getData = async () => {
    const boardRes = await getBoardList(challengeId);
    setBoardList(boardRes);

    const userRes = await getUserData();
    setUserData(userRes);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <PostListSection>
      {boardList.map((board: boardType) => (
        <Post
          key={board.id}
          board={board}
          isMyPost={userData.nickname === board.user.nickname}
        />
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
