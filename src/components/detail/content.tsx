import styled from 'styled-components';
import { theme } from 'styles/theme';
import { background } from 'assets';
import { logo } from 'assets';

export default function Content() {
  return (
    <Container>
      <Wrapper>
        <Image src={background}></Image>
        <Text>ReactJS 챌린지 지원하세요.</Text>
      </Wrapper>
      <Frame>
        <Logo src={logo}></Logo>
        <Button>챌린저 되러가기</Button>
      </Frame>
    </Container>
  );
}

const Container = styled.div`
  width: 70%;
  margin-top: 60px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  width: 60%;
`;

const Image = styled.img`
  width: 100%;
`;

const Text = styled.p`
  margin: 20px 0 200px;
`;

const Frame = styled.div`
  width: 30%;
  height: 200px;
  padding: 44px 0;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 40%;
`;

const Button = styled.button`
  width: 74%;
  height: 46px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 700;
  color: ${theme.whiteContentColor};
  background-color: ${theme.mainBlueColor};
`;
