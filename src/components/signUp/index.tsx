import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { postSignUp } from 'utils/api/signup';
import { SignUpType } from 'utils/interface/signUp';

const SignUp = () => {
  const [signupState, setSignupState] = useState<SignUpType>({
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

  const SubmitSignUp = () => {
    if (email === '' || nickname === '' || password === '') {
      alert('입력칸을 다시 확인해주세요.');
    } else {
      postSignUp({
        email: email,
        nickname: nickname,
        password: password,
      });
      alert('회원가입에 성공하셨습니다!');
    }
  };

  return (
    <SignUpPage>
      <SignUpWrapper>
        <SignUpText>
          <b>회원가입</b>
        </SignUpText>
        <SignUpBox>
          <SignUpForm>
            <b>닉네임</b>
          </SignUpForm>
          <SignUpInput
            name="nickname"
            placeholder="닉네임을 입력해주세요"
            onChange={SignUpInputChange}
            maxLength={10}
          />
          <SignUpForm>
            <b>이메일</b>
          </SignUpForm>
          <SignUpInput
            onChange={SignUpInputChange}
            name="email"
            placeholder="이메일을 입력해주세요"
          />
          <SignUpForm>
            <b>비밀번호</b>
          </SignUpForm>
          <SignUpInput
            onChange={SignUpInputChange}
            name="password"
            placeholder="비밀번호를 입력해주세요"
            minLength={8}
            maxLength={20}
          />
          <SignUpBtn onClick={SubmitSignUp}>
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
const SignUpText = styled.div`
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
const SignUpForm = styled.div`
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
