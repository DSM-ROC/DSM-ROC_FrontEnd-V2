import styled from 'styled-components';
import { theme } from 'styles/theme';

const MyUserData = () => {
  return (
    <MyUserDataSection>
      <SectionTitle>회원 정보</SectionTitle>
      <InputWrap>
        <SubTitle>닉네임</SubTitle>
        <UserDataInput />
      </InputWrap>
      <InputWrap>
        <SubTitle>이메일</SubTitle>
        <UserDataInput />
      </InputWrap>
    </MyUserDataSection>
  );
};

const UserDataInput = styled.input`
  width: 100%;
  height: 70px;

  border: ${theme.dailyGray} 1px solid;
  border-radius: 10px;
  outline: none;
  padding: 0 25px;

  font-size: 18px;
`;

const SubTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  gap: 8px;
`;

const SectionTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const MyUserDataSection = styled.section`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;

  border-bottom: ${theme.dailyGray} 1px solid;
  padding-bottom: 50px;
`;

export default MyUserData;
