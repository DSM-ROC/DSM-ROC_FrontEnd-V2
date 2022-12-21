import JoinChallenge from '../components/mypage/joinChallenge';
import UserInfo from '../components/mypage/userInfo';
import JoinedChallenge from '../components/mypage/joinedChallenge';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { profile } from '../assets';
function myPage() {
  return (
    <Maincontainer>
      <BackgroundCover />
      <Profile>
        <ProfileImg src={profile}></ProfileImg>
        <Username>안희명남승권</Username>
        <Contents>
          <UserInfo></UserInfo>
          <JoinChallenge></JoinChallenge>
          <JoinedChallenge></JoinedChallenge>
        </Contents>
      </Profile>
    </Maincontainer>
  );
}

const Maincontainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  margin-bottom: 200px;
  display: flex;
  justify-content: center;
`;

const BackgroundCover = styled.div`
  width: 100%;
  height: 540px;
  background-color: ${theme.mainBlueColor};
  position: absolute;
`;
const Profile = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  padding-top: 110px;
  z-index: 10;
`;

const ProfileImg = styled.img`
  width: 160px;
  height: 160px;
  margin-bottom: 36px;
`;

const Username = styled.span`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 28px;
  color: ${theme.whiteContentColor};
`;
const Contents = styled.div`
  width: 100%;
  height: 1539px;
  display: flex;
  flex-direction: column;
  border: solid ${theme.darkGray};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${theme.whiteContentColor};
  align-items: center;
  padding-top: 50px;
`;
export default myPage;
