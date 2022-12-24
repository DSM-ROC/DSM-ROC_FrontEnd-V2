import styled from 'styled-components';
import { theme } from 'styles/theme';
import { background } from 'assets';
import { logo } from 'assets';
import { challengeInfoType } from 'utils/interface/challenge/challenge';
import { joinChallenge } from 'utils/api/joinChallenge/joinChallenge';
import { useParams } from 'react-router-dom';

interface props {
  challengeData: challengeInfoType;
}

export default function Content({ challengeData }: props) {
  const { challengeId } = useParams();

  const join = () => {
    joinChallenge(challengeId as string);
  };

  return (
    <Container>
      <Wrapper>
        <Image img={challengeData.coverImage || background}></Image>
        <Text>{challengeData.introduction}</Text>
      </Wrapper>
      <Frame>
        <Logo src={logo}></Logo>
        <Button onClick={join}>챌린저 되러가기</Button>
      </Frame>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 60px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  width: 60%;
`;

const Image = styled.div`
  width: 100%;
  aspect-ratio: 10/6;
  background-image: url(${({ img }: { img: string }) => img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
