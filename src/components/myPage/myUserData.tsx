import { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { myDataUpdate } from 'utils/api/myDataUpdate';
import { userDataType } from 'utils/interface/user/user';

interface props {
  userData: userDataType;
}

const MyUserData = ({ userData }: props) => {
  const [userNickname, setUserNickname] = useState<string>(userData.nickname);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  const changeUserInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setUserNickname(value);
  };

  useEffect(() => {
    if (userData.nickname === userNickname) {
      setIsUpdate(false);
    } else {
      setIsUpdate(true);
    }
  }, [userNickname]);

  useEffect(() => {
    setUserNickname(userData.nickname);
  }, [userData]);

  const submit = async () => {
    await myDataUpdate(userNickname);
    window.location.reload();
  };

  return (
    <MyUserDataSection isUpdate={isUpdate}>
      <SectionTitle>회원 정보</SectionTitle>
      <InputWrap>
        <SubTitle>닉네임</SubTitle>
        <UserDataInput
          value={userNickname}
          onChange={changeUserInfo}
          name="nickname"
        />
      </InputWrap>
      <InputWrap>
        <SubTitle>이메일</SubTitle>
        <UserEmail>{userData.email}</UserEmail>
      </InputWrap>
      {isUpdate && <UpdateButton onClick={submit}>내 정보 수정</UpdateButton>}
    </MyUserDataSection>
  );
};

const UpdateButton = styled.button`
  background-color: white;
  border: 3px solid ${theme.uiBlueColor};
  width: 110px;
  height: 40px;
  align-self: flex-end;
  border-radius: 10px;
  margin-top: 20px;
  font-size: 14px;
  color: ${theme.uiBlueColor};
  font-weight: bolder;
  cursor: pointer;
`;

const UserEmail = styled.div`
  width: 100%;
  height: 70px;

  border: ${theme.dailyGray} 1px solid;
  border-radius: 10px;
  padding: 0 25px;

  font-size: 18px;
  display: flex;
  align-items: center;
`;

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
  padding-bottom: ${({ isUpdate }: { isUpdate: boolean }) =>
    isUpdate ? '15px' : '50px'};
`;

export default MyUserData;
