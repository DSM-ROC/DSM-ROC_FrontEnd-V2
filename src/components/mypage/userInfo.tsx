import styled from 'styled-components';
import { theme } from 'styles/theme';
function UserInfo() {
  return (
    <>
      <UserInfoWrapper>
        <PartTitle>회원정보</PartTitle>
        <BoldSpan>닉네임</BoldSpan>
        <Nickname>
          <NicknameValue>안희명남승권</NicknameValue>
        </Nickname>
        <BoldSpan>이메일</BoldSpan>
        <Email>
          <EmailValue>user@gmail.com</EmailValue>
        </Email>
      </UserInfoWrapper>
      <Line></Line>
    </>
  );
}

const UserInfoWrapper = styled.div`
  width: 80%;
  flex-direction: column;
  margin-bottom: 57px;
`;

const PartTitle = styled.p`
  font-size: 28px;
  font-weight: bold;

  margin-bottom: 60px;
`;

const BoldSpan = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const Nickname = styled.div`
  width: 100%;
  height: 77px;
  margin-bottom: 25px;
  border-radius: 10px;
  border: solid #979797;
  padding-left: 30px;
  display: flex;
  align-items: center;
`;

const Email = styled.div`
  width: 100%;
  height: 77px;
  margin-bottom: 25px;
  border-radius: 10px;
  border: solid #979797;

  padding-left: 30px;
  display: flex;
  align-items: center;
`;

const NicknameValue = styled.span`
  font-size: 18px;
`;

const EmailValue = styled.span`
  font-size: 18px;
`;

const Line = styled.hr`
  width: 80%;
  border: solid 0.1px #808080;
`;

export default UserInfo;
