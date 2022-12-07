import styled from 'styled-components';
import { theme } from 'styles/theme';

const Login = (): JSX.Element => {
  return (
    <>
      <LoginPage>
        <LoginWrapper>
          <LoginForm>
            <b>로그인</b>
          </LoginForm>
          <LoginBox>
            <EmailForm>
              <b>이메일</b>
            </EmailForm>
            <Email placeholder="이메일을 입력해주세요" />
              <PwForm>
                <b>비밀번호</b>
              </PwForm>
              <PassWord placeholder="비밀번호를 입력해주세요" />
            <LoginBtn>
              <b>로그인</b>
            </LoginBtn>
          </LoginBox>
        </LoginWrapper>
      </LoginPage>
    </>
  );
};

export default Login;

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
  justify-content: center;
  margin-top: 62px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
`;
const LoginForm = styled.div`
  font-size: 40px;
  margin-top: 73px;
  display: flex;
  position: absolute;
`;
const LoginBox = styled.div`
  margin-top: 209px;
  width: 420px;
  height: 340px;
`;
const EmailForm = styled.div`
  color: ${theme.mainBlueColor};
  font-size: 20px;
  margin-bottom: 30px;
`;
const Email = styled.input`
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
const PassWord = styled.input`
  border: none;
  border-bottom: 3px ${theme.mainBlueColor} solid;
  display: flex;
  width: 420px;
  padding-bottom: 10px;
  outline: none;
  font-size: 16px;
  margin-bottom: 42px;
`;
const LoginBtn = styled.button`
  width: 420px;
  height: 60px;
  border-radius: 33px;
  border: none;
  background-color: ${theme.mainBlueColor};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 680px;
  color: white;
  font-size: 24px;
  background: linear-gradient(
    To right,
    rgba(0, 100, 255, 0.4),
    ${theme.mainBlueColor}
  );
`;
