import { RefObject, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { getCommentList } from 'utils/api/calendar/calendar';
import { commentDataType } from 'utils/interface/comment/comment';
import Commemt from './commemt';

interface props {
  addCommentInputRef: RefObject<HTMLInputElement>;
}

const CommentList = ({ addCommentInputRef }: props): JSX.Element => {
  const { challengeId } = useParams();
  const [commentDateList, setCommentDateList] = useState<commentDataType[]>([]);

  const getCommentData = async () => {
    setCommentDateList(await getCommentList(parseInt(challengeId as string)));
  };

  useEffect(() => {
    getCommentData();
  }, []);

  const focusCommentInput = () => {
    addCommentInputRef.current?.focus();
  };

  return (
    <CommentListContainer>
      {commentDateList.length ? (
        commentDateList.map((commentData, i) => (
          <Commemt key={i} commentData={commentData} />
        ))
      ) : (
        <ReviewNotFound>
          <p>하루 리뷰가 없어요 😢</p>
          <WriteStartButton onClick={focusCommentInput}>
            하루 리뷰 작성하기
          </WriteStartButton>
        </ReviewNotFound>
      )}
    </CommentListContainer>
  );
};

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
