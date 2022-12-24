import styled from 'styled-components';
import { theme } from 'styles/theme';
import trashcan from '../assets/img/challenger/trashcan.png';

interface props {
  challengerInfo: {
    id: number;
    nickname: string;
  };
}

const MemberCard = ({ challengerInfo }: props) => {
  return (
    <Wrapper>
      <ProfileWrapper>
        <Profile />
        <ChallengerName>
          <b>[챌린저]</b>
          &nbsp;
          {challengerInfo.nickname}
        </ChallengerName>
      </ProfileWrapper>
      {true && <ExpulsionButton />}
    </Wrapper>
  );
};

export default MemberCard;

const ExpulsionButton = styled.button`
  width: 30px;
  aspect-ratio: 1;

  background-color: transparent;
  border: none;

  background-image: url(${trashcan});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  cursor: pointer;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 120px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  padding: 0 47px;
`;

const Profile = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;

  margin-right: 20px;
  background-color: ${theme.uiBlueColor};
`;

const ChallengerName = styled.p`
  font-size: 18px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;
