import styled from 'styled-components';
import { theme } from 'styles/theme';
import { profile } from 'assets';
import { cheak } from 'assets';
import { gitpen } from 'assets';
import { members } from 'assets';
import { useNavigate, useParams } from 'react-router-dom';

export default function ButtonBox() {
  const navigate = useNavigate();
  const challengeId = useParams().challengeId as string;

  const goCalendarPage = () => navigate(`/challenge/${challengeId}/calendar`);
  const goBoardPage = () => navigate(`/challenge/${challengeId}/board`);
  const goChallengerPage = () =>
    navigate(`/challenge/${challengeId}/challengers`);

  const goCreateBoard = () => navigate(`/challenge/${challengeId}/createBoard`);

  return (
    <AddBoardContainer>
      <InputWrap>
        <Profile />
        <BoardInput onClick={goCreateBoard}>
          오늘의 메모는 하루에 한 번만 작성이 가능합니다.
        </BoardInput>
      </InputWrap>
      <Buttons>
        <Button onClick={goCalendarPage}>
          <Icon img={cheak} />
          <Label>캘린더 보기</Label>
        </Button>
        <Button onClick={goBoardPage}>
          <Icon img={gitpen} />
          <Label>자유게시판</Label>
        </Button>
        <Button onClick={goChallengerPage}>
          <Icon img={members} />
          <Label>챌린저 목록</Label>
        </Button>
      </Buttons>
    </AddBoardContainer>
  );
}

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

const BoardInput = styled.div`
  border: none;
  outline: none;
  height: 70px;
  flex: 1 1 0;
  padding-left: 30px;
  border-radius: 35px;
  background-color: ${theme.ligthGray};
  display: flex;
  align-items: center;
  font-size: 20px;
  color: ${theme.darkGray};
  cursor: pointer;
`;

const Profile = styled.div`
  height: 70px;
  aspect-ratio: 1;
  margin-right: 15px;
  border-radius: 50%;
  background-image: url(${profile});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const InputWrap = styled.div`
  width: 100%;
  height: fit-content;
  border-bottom: 1px solid ${theme.darkGray};
  display: flex;
  flex: 1;
  padding: 35px 0;
`;

const AddBoardContainer = styled.section`
  width: 100%;
  height: fit-content;
  padding: 0 40px;
  border: 1px solid ${theme.darkGray};
  border-radius: 10px;
  margin-top: 80px;
`;
