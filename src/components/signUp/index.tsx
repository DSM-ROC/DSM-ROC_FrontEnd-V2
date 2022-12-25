import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { postSignUp } from 'utils/api/signup';
import ToastError from 'utils/functions/errorMessage';
import { SignUpType } from 'utils/interface/signUp';

const SignUpSection = () => {
  const navigate = useNavigate();
  const [signupState, setSignupState] = useState<SignUpType>({
    email: '',
    password: '',
    nickname: '',
  });
  const [checkPW, setCheckPW] = useState<string>('');

  const { email, password, nickname } = signupState;

  const formmatInput = (value: string, name: string): string => {
    if (name === 'email') {
      return value.replace(/[^a-z0-9.@]/g, '');
    }
    if (name === 'password') {
      return value.replace(/[^a-z0-9.@]/g, '');
    }
    if (name === 'nickname') {
      return value.replace(/[^a-z0-9]/g, '');
    }

    throw new Error('알 수 없는 name');
  };

  const SignUpInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    const formmatedVlaue = formmatInput(value, name);

    setSignupState({
      ...signupState,
      [name]: formmatedVlaue,
    });
  };
  const changeCheckPW = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCheckPW(value);
  };

  const SubmitSignUp = async () => {
    if (email === '' || nickname === '' || password === '') {
      ToastError('입력칸을 다시 확인해주세요!');
    } else if (!/^(\S+)@(\S+)(\.)(\S+)$/.test(email)) {
      ToastError('email 형식이 올바르지 않습니다!');
    } else if (password !== checkPW) {
      ToastError('password가 같지 않습니다!');
      setCheckPW('');
      setSignupState((pre) => ({ ...pre, password: '' }));
    } else {
      try {
        await postSignUp({
          email: email,
          nickname: nickname,
          password: password,
        });
        toast.success('회원가입에 성공하셨습니다!');
        navigate('/');
      } catch (error) {
        ToastError('회원가입에 실패했습니다!');
        setSignupState({ email: '', password: '', nickname: '' });
      }
    }
  };

  return (
    <SignUpPage>
      <SignUpWrapper>
        <SignUpText>회원가입</SignUpText>
        <SignUpBox>
          <SignUpForm>닉네임</SignUpForm>
          <SignUpInput
            name="nickname"
            placeholder="닉네임을 입력해주세요"
            onChange={SignUpInputChange}
            maxLength={10}
            value={nickname}
          />
          <SignUpForm>이메일</SignUpForm>
          <SignUpInput
            onChange={SignUpInputChange}
            name="email"
            placeholder="이메일을 입력해주세요"
            value={email}
          />
          <SignUpForm>비밀번호</SignUpForm>
          <SignUpInput
            onChange={SignUpInputChange}
            name="password"
            placeholder="비밀번호를 입력해주세요"
            minLength={8}
            maxLength={20}
            value={password}
          />
          <SignUpForm>비밀번호 확인</SignUpForm>
          <SignUpInput
            onChange={changeCheckPW}
            name="password"
            placeholder="비밀번호를 입력해주세요"
            minLength={8}
            maxLength={20}
            value={checkPW}
            type="password"
          />
          <SignUpBtn onClick={SubmitSignUp}>회원가입</SignUpBtn>
        </SignUpBox>
      </SignUpWrapper>
    </SignUpPage>
  );
};

export default SignUpSection;

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
const SignUpText = styled.p`
  font-size: 40px;
  font-weight: bolder;
  margin-top: 70px;
  display: flex;
  position: absolute;
`;
const SignUpBox = styled.div`
  margin-top: 195px;
  width: 420px;
  height: 340px;
`;
const SignUpForm = styled.p`
  color: ${theme.mainBlueColor};
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const SignUpInput = styled.input`
  border: none;
  border-bottom: 3px ${theme.mainBlueColor} solid;
  display: flex;
  width: 420px;
  padding-bottom: 10px;
  outline: none;
  font-size: 16px;
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
  font-weight: bold;
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
