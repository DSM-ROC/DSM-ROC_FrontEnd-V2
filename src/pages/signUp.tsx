import styled from 'styled-components';
import { theme } from 'styles/theme';

const SignUp = (): JSX.Element => {
  return (
    <>
      <SignUpPage>
        <SignUpWrapper>
          <SignUpForm>
            <b>회원가입</b>
          </SignUpForm>
          <SignUpBox>
            <NicknameForm>
              <b>닉네임</b>
            </NicknameForm>
            <Nickname placeholder="아이디를 입력해주세요" />
            <EmailForm>
              <b>이메일</b>
            </EmailForm>
            <Email placeholder="이메일을 입력해주세요" />
            <PwForm>
              <b>비밀번호</b>
            </PwForm>
            <PassWord placeholder="비밀번호를 입력해주세요" />
            <SignUpBtn>
              <b>회원가입</b>
            </SignUpBtn>
          </SignUpBox>
        </SignUpWrapper>
      </SignUpPage>
    </>
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
const Nickname = styled.input`
  border: none;
  border-bottom: 3px ${theme.mainBlueColor} solid;
  display: flex;
  width: 420px;
  padding-bottom: 10px;
  outline: none;
  font-size: 16px;
  margin-bottom: 42px;
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
  margin-bottom: 76px;
`;
const SignUpBtn = styled.button`
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
`;
