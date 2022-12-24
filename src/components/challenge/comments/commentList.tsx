import { format } from 'date-fns';
import { RefObject, useEffect, useState, useTransition } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { getUserData } from 'utils/api/userData/userData';
import { commentDataType } from 'utils/interface/comment/comment';
import { userDataType } from 'utils/interface/user/user';
import { commentListRecoil } from 'utils/store/commentList/commentList';
import Commemt from './commemt';
import { useLocation } from 'react-router-dom';

interface props {
  addCommentInputRef: RefObject<HTMLInputElement>;
}

const CommentList = ({ addCommentInputRef }: props): JSX.Element => {
  const navigate = useNavigate();
  // const location = useLocation();

  const focusCommentInput = () => {
    addCommentInputRef.current?.focus();
  };
  const [userData, setUserData] = useState<userDataType>({
    id: 0,
    nickname: '',
    email: '',
  });

  const commentDateList = useRecoilValue(commentListRecoil);

  const getData = async () => {
    const res = await getUserData();
    setUserData(res);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <CommentListContainer>
      {commentDateList.map((commentData: commentDataType, i) => (
        <Commemt key={i} commentData={commentData} userData={userData} />
      ))}
    </CommentListContainer>
  );
};

/**
 *  {commentDateList.length ? (
        commentDateList.map((commentData: commentDataType, i) => (
          <Commemt key={i} commentData={commentData} userData={userData} />
        ))
      ) : (
        <ReviewNotFound>
          <p>하루 리뷰가 없어요 😢</p>
          <WriteStartButton onClick={focusCommentInput}>
            하루 리뷰 작성하기
          </WriteStartButton>
        </ReviewNotFound>
      )}
 */

const WriteStartButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 16px;
  text-decoration: underline;
  color: ${theme.mainBlueColor};
  font-weight: 600;

  margin-top: 20px;
  cursor: pointer;
`;

const ReviewNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 30px;
    font-weight: bold;
  }
`;

const CommentListContainer = styled.section`
  width: 100%;
  height: fit-content;

  margin-top: 100px;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export default CommentList;
