import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

interface SignUpProps {
  email: string;
  password: string;
  nickname: string;
}

const SignUp = (): JSX.Element => {
  const [signupState, setSignupState] = useState<SignUpProps>({
    email: '',
    password: '',
    nickname: '',
  });

  const { email, password, nickname } = signupState;

  const SignUpInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setSignupState({
      ...signupState,
      [name]: value,
    });
  };

  return (
    <SignUpPage>
      <SignUpWrapper>
        <SignUpForm>
          <b>회원가입</b>
        </SignUpForm>
        <SignUpBox>
          <NicknameForm>
            <b>닉네임</b>
          </NicknameForm>
          <SignUpInput
            name="nickname"
            placeholder="닉네임을 입력해주세요"
            onChange={SignUpInputChange}
            maxLength={10}
          />
          <EmailForm>
            <b>이메일</b>
          </EmailForm>
          <SignUpInput
            onChange={SignUpInputChange}
            name="email"
            placeholder="이메일을 입력해주세요"
          />
          <PwForm>
            <b>비밀번호</b>
          </PwForm>
          <SignUpInput
            onChange={SignUpInputChange}
            name="password"
            placeholder="비밀번호를 입력해주세요"
            minLength={8}
            maxLength={20}
          />
          <SignUpBtn>
            <b>회원가입</b>
          </SignUpBtn>
        </SignUpBox>
      </SignUpWrapper>
    </SignUpPage>
  );
};

export default SignUp;

const SignUpPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SignUpWrapper = styled.div`
  width: 600px;
  height: 740px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  margin-top: 27px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
`;
const SignUpForm = styled.div`
  font-size: 40px;
  margin-top: 70px;
  display: flex;
  position: absolute;
`;
const SignUpBox = styled.div`
  margin-top: 195px;
  width: 420px;
  height: 340px;
`;
const NicknameForm = styled.div`
  color: ${theme.mainBlueColor};
  font-size: 20px;
  margin-bottom: 30px;
`;

const EmailForm = styled.div`
  color: ${theme.mainBlueColor};
  font-size: 20px;
  margin-bottom: 30px;
`;
const SignUpInput = styled.input`
  border: none;
  border-bottom: 3px ${theme.mainBlueColor} solid;
  display: flex;
  width: 420px;
  padding-bottom: 10px;
  outline: none;
  font-size: 16px;
  margin-bottom: 42px;
`;
const PwForm = styled.div`
  color: ${theme.mainBlueColor};
  font-size: 20px;
  margin-bottom: 30px;
`;

const SignUpBtn = styled.button`
  cursor: pointer;
  width: 420px;
  height: 60px;
  border-radius: 33px;
  border: none;
  background-color: ${theme.mainBlueColor};
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  background: linear-gradient(
    To right,
    rgba(0, 100, 255, 0.4),
    ${theme.mainBlueColor}
  );

  :hover {
    border: 1px solid ${theme.mainBlueColor};
    background: white;
    color: ${theme.mainBlueColor};
  }
`;
