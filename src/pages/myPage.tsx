import styled from 'styled-components';
import { theme } from 'styles/theme';
import { userProfile } from 'assets';
import MyUserData from 'components/myPage/myUserData';
import MyChallenges from 'components/myPage/myChallenges';

const MyPage = (): JSX.Element => {
  return (
    <MyPageContainer>
      <BannerBox />
      <UserInfoWrap>
        <UserProfileWrap>
          <UserProfile />
          <UserNickname>시나브로</UserNickname>
        </UserProfileWrap>
        <UserInfoContainer>
          <MyUserData />
          <MyChallenges />
        </UserInfoContainer>
      </UserInfoWrap>
    </MyPageContainer>
  );
};

const UserNickname = styled.p`
  font-size: 28px;
  font-weight: bold;
  color: white;
`;

const UserProfile = styled.div`
  width: 150px;
  aspect-ratio: 1;
  border-radius: 50%;
  background-image: url(${userProfile});
  background-repeat: no-repeat;
  background-size: 85px;
  background-position: center;
  background-color: white;
`;

const UserProfileWrap = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

const UserInfoWrap = styled.div`
  width: 55%;
  height: 100px;
  height: fit-content;
  min-height: 100px;
  margin: 0 auto;
  margin-top: -300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
`;

const UserInfoContainer = styled.article`
  width: 100%;
  height: fit-content;
  min-height: 100px;

  margin: 0 auto;
  margin-bottom: 300px;
  padding: 100px 80px;

  background-color: white;

  border: 1px solid ${theme.darkGray};
  border-radius: 20px 20px 0px 0px;
`;

const BannerBox = styled.div`
  width: 100%;
  height: 540px;
  background-color: ${theme.mainBlueColor};
`;

const MyPageContainer = styled.main`
  width: 100%;
  height: fit-content;
`;

export default MyPage;
