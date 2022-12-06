import styled from 'styled-components';

const Login = (): JSX.Element => {
  return (
    <>
      <LoginPage>
        <Head>Header</Head>
        <LoginWrapper>
          <LoginForm>
            <b>로그인</b>
          </LoginForm>
          <LoginBox>
            <EmailForm>이메일</EmailForm>
            <Email placeholder="이메일을 입력해주세요" />
            <InputForm>
              <PwForm>비밀번호</PwForm>
              <PassWord placeholder="비밀번호를 입력해주세요" />
            </InputForm>
            <LoginBtn><b>로그인</b></LoginBtn>
          </LoginBox>
        </LoginWrapper>
      </LoginPage>
    </>
  );
};

export default Login;

const LoginPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Head = styled.div`
  width: 1512px;
  height: 130px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
`;
const LoginWrapper = styled.div`
  width: 600px;
  height: 620px;
  border-radius: 10px;
  border: solid 1px #808080;
  display: flex;
  justify-content: center;
  margin-top: 62px;
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
  color: blue;
  font-size: 20px;
  margin-bottom: 30px;
`;
const Email = styled.input`
  border: none;
  border-bottom: 1px blue solid;
  display: flex;
  position: absolute;
  width: 420px;
  padding-bottom: 10px;
  outline: none;
`;

const PwForm = styled.div`
  color: blue;
  font-size: 20px;
  margin-bottom: 30px;
`;
const PassWord = styled.input`
  border: none;
  border-bottom: 1px blue solid;
  display: flex;
  position: absolute;
  width: 420px;
  padding-bottom: 10px;
  outline: none;
`;
const InputForm = styled.div`
  position: relative;
  top: 50px;
`;
const LoginBtn = styled.button`
  width: 420px;
  height: 60px;
  border-radius: 33px;
  border: none;
  background-color: blue;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 240px;
  color: white;
  font-size: 24px;
`;