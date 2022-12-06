import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import logo from '../../../assets/img/header/logo.png';

const Header = (): JSX.Element => {
  const [status, setStatus] = useState(false);
  return (
    <>
      <Container>
        <Wrapper>
          <Cover>
            <Image src={logo}></Image>
            <Frame>
              <Nav>메인페이지</Nav>
              <Nav>챌린지 전체보기</Nav>
              <Nav>챌린지 생성</Nav>
              <Nav>마이 페이지</Nav>
            </Frame>
          </Cover>
          <Button>
            {status === false ? (
              <>
                <LoginButton>로그인</LoginButton>
                <SignUpButton>회원가입</SignUpButton>
              </>
            ) : (
              <>
                <Logout>로그아웃</Logout>
              </>
            )}
          </Button>
        </Wrapper>
      </Container>
      <Outlet /> {/**이거 지우지 마 */}
    </>
  );
};

export default Header;

const Container = styled.div`
  width: 100vw;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const Wrapper = styled.div`
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Cover = styled.div`
  gap: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100px;
`;

const Frame = styled.div`
  gap: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Nav = styled.p``;

const Button = styled.div``;

const StyleButton = styled.button`
  width: 150px;
  height: 44px;
  border-radius: 22px;
  border: none;
  outline: none;
  font-size: 18px;
  font-weight: 600;
`;

const LoginButton = styled(StyleButton)`
  margin-right: 8px;
  color: #fff;
  background-color: #1864ab;
`;

const SignUpButton = styled(StyleButton)`
  border: 1px solid #1864ab;
  color: #1864ab;
  background-color: #fff;
`;

const Logout = styled(StyleButton)`
  border: 1px solid #1864ab;
  color: #1864ab;
  background-color: #fff;
`;
