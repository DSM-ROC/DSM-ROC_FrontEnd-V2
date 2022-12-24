import { boardIcon, calenderIcon, challengerIcon } from 'assets';
import { ChangeEvent, KeyboardEvent, RefObject, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { addComment } from 'utils/api/comment/comment';
import { saveCommentList } from 'utils/functions/comment/comment';
import { isSameDate } from 'utils/functions/isSameDate/isSameDate';
import { commentListRecoil } from 'utils/store/commentList/commentList';

interface props {
  addCommentInputRef: RefObject<HTMLInputElement>;
  date: Date;
}

const AddComment = ({ addCommentInputRef, date }: props): JSX.Element => {
  const navigate = useNavigate();
  const [comment, setComment] = useState<string>('');
  const challengeId = useParams().challengeId as string;
  const setCommentList = useSetRecoilState(commentListRecoil);

  const goCalendarPage = () => navigate(`/challenge/${challengeId}/calendar`);
  const goBoardPage = () => navigate(`/challenge/${challengeId}/board`);
  const goChallengerPage = () =>
    navigate(`/challenge/${challengeId}/challengers`);

  const changeComment = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setComment(value);
  };

  const submit = async () => {
    console.log(date, new Date());
    console.log(isSameDate(date, new Date()));
    if (!isSameDate(date, new Date())) {
      console.log('dddd');
      alert('당일에만 작성할 수 있어요!!');
      return null;
    }

    await addComment(comment, parseInt(challengeId));
    setCommentList(await saveCommentList(parseInt(challengeId), date));
    setComment('');
    window.location.reload();
  };

  const getEnter = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') submit();
  };

  return (
    <AddCommentContainer>
      <InputWrap>
        <Profile />
        <CommentInput
          placeholder="오늘의 메모는 하루에 한 번만 작성이 가능합니다."
          value={comment}
          onChange={changeComment}
          onKeyDown={getEnter}
          ref={addCommentInputRef}
        />
      </InputWrap>
      <Buttons>
        <Button onClick={goCalendarPage}>
          <Icon img={calenderIcon} />
          <Label>캘린더 보기</Label>
        </Button>
        <Button onClick={goBoardPage}>
          <Icon img={boardIcon} />
          <Label>자유게시판</Label>
        </Button>
        <Button onClick={goChallengerPage}>
          <Icon img={challengerIcon} />
          <Label>챌린저 목록</Label>
        </Button>
      </Buttons>
    </AddCommentContainer>
  );
};

const Label = styled.div`
  color: ${theme.dailyGray};
  font-size: 18px;
  font-weight: 600;
`;

const Icon = styled.div`
  width: 30px;
  aspect-ratio: 1;

  background-image: url(${({ img }: { img: string }) => img});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const Button = styled.button`
  width: fit-content;
  height: fit-content;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const Buttons = styled.div`
  padding: 35px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
`;

const CommentInput = styled.input`
  height: 70px;
  flex: 1 1 0;
  padding-left: 30px;
  border-radius: 35px;
  border: none;
  outline: none;
  background-color: ${theme.ligthGray};
  font-size: 20px;

  &::placeholder {
    color: ${theme.dailyGray};
  }
`;

const Profile = styled.div`
  height: 70px;
  aspect-ratio: 1;
  margin-right: 15px;
  border-radius: 50%;
  background-color: ${theme.uiBlueColor};
`;

const InputWrap = styled.div`
  width: 100%;
  height: fit-content;
  border-bottom: 1px solid ${theme.darkGray};
  display: flex;
  flex: 1;
  padding: 35px 0;
`;

const AddCommentContainer = styled.section`
  width: 100%;
  height: fit-content;
  padding: 0 40px;
  border: 1px solid ${theme.darkGray};
  border-radius: 10px;
`;

export default AddComment;
