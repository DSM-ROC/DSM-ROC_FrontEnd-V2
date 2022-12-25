import styled from 'styled-components';
import { theme } from 'styles/theme';
import { profile } from 'assets';
import { cheak } from 'assets';
import { gitpen } from 'assets';
import { members } from 'assets';

export default function ButtonBox() {
  const item = [
    {
      img: cheak,
      text: '캘린더보기',
    },
    {
      img: gitpen,
      text: '자유게시판',
    },
    {
      img: members,
      text: '챌린지목록',
    },
  ];
  return (
    <Container>
      <Wrapper>
        <Summary>챌린지 자유 게시판</Summary>
        <ButtonItem>
          <FirstBox>
            <ProfileBox>
              <ProfileImage src={profile} alt="" />
              <ProfileButton>
                챌린지에 대한 의견과 생각을 공유해주세요!
              </ProfileButton>
            </ProfileBox>
          </FirstBox>
          <SecondBox>
            <RouteBox>
              {item.map((e, i) => (
                <Frame key={i}>
                  <RouteImage src={e.img} />
                  <RouteText>{e.text}</RouteText>
                </Frame>
              ))}
            </RouteBox>
          </SecondBox>
        </ButtonItem>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 70%;
  margin-top: 80px;
`;

const Summary = styled.h2`
  margin-bottom: 50px;
`;

const ButtonItem = styled.div`
  width: 100%;
  height: 285px;
  border: 1px solid ${theme.darkGray};
  border-radius: 8px;
`;

const FirstBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileBox = styled.div`
  width: 90%;
  padding: 40px 0;
  border-bottom: 1px solid ${theme.darkGray};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProfileImage = styled.img`
  width: 80px;
`;

const ProfileButton = styled.button`
  width: 800px;
  height: 80px;
  border-radius: 50px;
  outline: none;
  border: none;
  text-align: center;
  padding-left: 50px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${theme.dailyGray};
`;

const SecondBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RouteBox = styled.div`
  width: 70%;
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Frame = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RouteImage = styled.img`
  width: 30px;
`;

const RouteText = styled.p``;
