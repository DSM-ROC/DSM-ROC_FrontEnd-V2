import styled from 'styled-components';
import { theme } from 'styles/theme';
import { background } from 'assets';
import { challengeInfoType } from 'utils/interface/challenge/challenge';

interface props {
  chellenge: challengeInfoType;
}

const ChallengeCard = ({ chellenge }: props) => {
  return (
    <Frame>
      <Image img={chellenge.coverImage || background}></Image>
      <Text>
        <Title>{chellenge.name}</Title>
        <Content>
          <User>{chellenge.user.nickname}</User>
        </Content>
      </Text>
    </Frame>
  );
};

const Frame = styled.div`
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  background-color: ${theme.whiteContentColor};
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Image = styled.div`
  width: 100%;
  aspect-ratio: 10/6;
  border-radius: 4px;
  background-image: url(${({ img }: { img: string }) => img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Text = styled.div`
  width: 100%;
  margin: 12px 0 16px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

const Title = styled.p`
  width: 90%;
  font-size: 18px;
  font-weight: 700;
`;

const Content = styled.div`
  width: 90%;
  margin-top: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const User = styled.p`
  font-size: 12px;
  font-weight: 600;
`;

export default ChallengeCard;
