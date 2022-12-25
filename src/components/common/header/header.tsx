import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import { logo } from 'assets';

const Header = (): JSX.Element => {
  const [status, setStatus] = useState(false);

  return (
    <>
      <Container>
        <Cover>
          <Image src={logo} />
          <Frame>
            <Link to="/">
              <Nav>메인페이지</Nav>
            </Link>
            <Link to="/chllenge">
              <Nav>챌린지 전체보기</Nav>
            </Link>
            <Link to="/createChallenge">
              <Nav>챌린지 생성</Nav>
            </Link>
            <Link to="/myPage">
              <Nav>마이 페이지</Nav>
            </Link>
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
      </Container>
      <Outlet /> {/**이거 지우지 마 */}
    </>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 0 10vw;
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

const Frame = styled.nav`
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
