import { deleteIcon } from 'assets';
import { format } from 'date-fns';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { commentDataType } from 'utils/interface/comment/comment';

interface props {
  commentData: commentDataType;
}

// const myWriterId = 0;

const Commemt = ({ commentData }: props): JSX.Element => {
  return (
    <CommemtContainer>
      <WriteInfoWrap>
        <Writer>{commentData.user.nickname}</Writer>
        <CreatedDate>{format(commentData.createdAt, 'yyyy-MM-dd')}</CreatedDate>
      </WriteInfoWrap>
      <Content>{commentData.text}</Content>
      {/* {commentData. === myWriterId && <DeleteComment />} */}
    </CommemtContainer>
  );
};

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

  position: absolute;
  top: 25px;
  right: 30px;
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
