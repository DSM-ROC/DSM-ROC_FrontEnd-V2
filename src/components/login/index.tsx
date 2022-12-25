import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { postLogin } from 'utils/api/login';
import { LoginType } from 'utils/interface/login';

const Login = (): JSX.Element => {
  const [loginState, setLoginState] = useState<LoginType>({
    email: '',
    password: '',
  });

  const { email, password } = loginState;

  const LoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setLoginState({
      ...loginState,
      [name]: value,
    });
  };

  const SubmitLogin = () => {
    if (email === '' || password === '') {
      alert('입력칸을 다시 확인해주세요.');
    } else {
      postLogin({
        email: email,
        password: password,
      });
      alert('로그인에 성공하셨습니다!');
    }
  };

  return (
    <>
      <LoginPage>
        <LoginWrapper>
          <LoginText>로그인</LoginText>
          <LoginBox>
            <LoginFormWrap>
              <LoginForm>이메일</LoginForm>
              <LoginInput
                name="email"
                placeholder="이메일을 입력해주세요"
                onChange={LoginInputChange}
              />
            </LoginFormWrap>
            <LoginFormWrap>
              <LoginForm>비밀번호</LoginForm>
              <LoginInput
                name="password"
                placeholder="비밀번호를 입력해주세요"
                minLength={8}
                maxLength={20}
                onChange={LoginInputChange}
              />
            </LoginFormWrap>
            <LoginBtn onClick={SubmitLogin}>로그인</LoginBtn>
          </LoginBox>
        </LoginWrapper>
      </LoginPage>
    </>
  );
};

export default Login;

const LoginFormWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const LoginPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWrapper = styled.div`
  width: 600px;
  height: 620px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 62px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
`;

const LoginText = styled.p`
  font-size: 40px;
  margin-top: 73px;
  margin-bottom: 88px;
  display: flex;
  font-weight: bold;
`;

const LoginBox = styled.div`
  width: 420px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const LoginForm = styled.p`
  color: ${theme.mainBlueColor};
  font-size: 20px;
  font-weight: bold;
`;

const LoginInput = styled.input`
  border: none;
  border-bottom: 3px ${theme.mainBlueColor} solid;
  display: flex;
  width: 420px;
  padding-bottom: 10px;
  outline: none;
  font-size: 16px;
`;

const LoginBtn = styled.button`
  cursor: pointer;
  width: 420px;
  height: 60px;
  border-radius: 33px;
  margin-top: 35px;
  border: none;
  background-color: ${theme.mainBlueColor};
  justify-content: center;
  align-items: center;
  font-weight: bold;

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
