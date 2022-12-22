import { RefObject } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { commentDataType } from 'utils/interface/comment/comment';
import Commemt from './commemt';

interface props {
  addCommentInputRef: RefObject<HTMLInputElement>;
  date: Date;
  commentDateList: commentDataType[];
}

const CommentList = ({
  addCommentInputRef,
  date,
  commentDateList,
}: props): JSX.Element => {
  const focusCommentInput = () => {
    addCommentInputRef.current?.focus();
  };

  return (
    <CommentListContainer>
      {commentDateList.length ? (
        commentDateList.map((commentData: commentDataType, i) => (
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
