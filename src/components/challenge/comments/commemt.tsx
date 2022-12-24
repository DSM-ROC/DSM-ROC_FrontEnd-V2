import { deleteIcon, editIcon } from 'assets';
import { format } from 'date-fns';
import { ChangeEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { deleteComment, patchComment } from 'utils/api/comment/comment';
import { commentDataType } from 'utils/interface/comment/comment';
import { userDataType } from 'utils/interface/user/user';

interface props {
  commentData: commentDataType;
  userData: userDataType;
}

const Commemt = ({ commentData, userData }: props): JSX.Element => {
  const challengeId = useParams().challengeId as string;
  const [text, setText] = useState<string>(commentData.text);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const deleteReview = () => {
    if (window.confirm('리뷰를 삭제합니다')) {
      console.log('delete');
      deleteComment(parseInt(challengeId), commentData.id);
    }
  };

  const commentEdit = () => setIsEdit(true);

  const editCancel = () => {
    setText(commentData.text);
    setIsEdit(false);
  };

  const patchReview = async () => {
    console.log('patchReview');

    await patchComment(parseInt(challengeId), commentData.id, text);

    setIsEdit(false);
  };

  const changeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <CommemtContainer>
      <WriteInfoWrap>
        <Writer>{commentData.user.nickname}</Writer>
        <CreatedDate>{format(commentData.createdAt, 'yyyy-MM-dd')}</CreatedDate>
      </WriteInfoWrap>
      {isEdit ? (
        <CommentInputWrap>
          <CommentInput value={text} onChange={changeText} />
          <EditButtonWrap>
            <EditCancelButton onClick={editCancel}>cancel</EditCancelButton>
            <PatchButton onClick={patchReview}>edit</PatchButton>
          </EditButtonWrap>
        </CommentInputWrap>
      ) : (
        <Content>{text}</Content>
      )}
      {!isEdit && commentData.user.id === userData.id && (
        <ButtonWrap>
          <PatchComment onClick={commentEdit} />
          <DeleteComment onClick={deleteReview} />
        </ButtonWrap>
      )}
    </CommemtContainer>
  );
};

const EditCancelButton = styled.button`
  background-color: transparent;
  width: fit-content;
  height: fit-content;
  border: none;
  border-radius: 10px;

  font-size: 16px;
  color: ${theme.uiRedColor};
  padding: 3px 7px;
  font-weight: bold;
  cursor: pointer;
`;

const PatchButton = styled(EditCancelButton)`
  color: ${theme.uiBlueColor};
`;

const EditButtonWrap = styled.div`
  width: fit-content;
  display: flex;
  gap: 10px;
  margin-top: 5px;
`;

const CommentInputWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ButtonWrap = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  gap: 10px;

  position: absolute;
  top: 25px;
  right: 30px;
`;

const DeleteComment = styled.button`
  width: 20px;
  aspect-ratio: 1;
  border: none;

  background-color: transparent;
  background-image: url(${deleteIcon});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  cursor: pointer;
`;

const PatchComment = styled(DeleteComment)`
  background-image: url(${editIcon});
`;

const Content = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 30px;

  white-space: pre-wrap;
  word-break: break-all;

  font-size: 20px;
  font-family: 'Noto Sans KR';
  font-weight: 400;
`;

const CommentInput = styled.input`
  width: 100%;
  height: fit-content;
  padding-bottom: 3px;
  margin-top: 30px;
  border: none;
  border-bottom: 1px solid ${theme.dailyGray};

  white-space: pre-wrap;
  word-break: break-all;

  font-size: 20px;
  font-family: 'Noto Sans KR';
  font-weight: 400;
  outline: none;
`;

const WriteInfoWrap = styled.div`
  display: flex;
  gap: 8px;
`;

const CreatedDate = styled.p`
  margin: 0;
  font-size: 14px;

  color: ${theme.darkGray};
`;

const Writer = styled(CreatedDate)`
  color: ${theme.blackContentColor};
  font-weight: bold;
`;

const CommemtContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 30px 40px 50px 40px;
  background-color: white;
  border: 1px solid ${theme.dailyGray};
  border-radius: 10px;

  position: relative;
`;

export default Commemt;
