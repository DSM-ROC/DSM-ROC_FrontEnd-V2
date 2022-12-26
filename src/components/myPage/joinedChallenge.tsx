import styled from 'styled-components';
import { theme } from 'styles/theme';
import { background, userProfile } from 'assets';
import { Link } from 'react-router-dom';
import { myJoinedChallengeType } from 'utils/interface/myJoinedChallenge';

interface props {
  challenge: myJoinedChallengeType;
}

const JoinedChallenge = ({ challenge }: props) => {
  return (
    <Link to={`/challenge/${challenge.challengeId}`}>
      <Frame>
        <Image img={challenge.challenge.coverImage || background}></Image>
        <Text>
          <Title>{challenge.challenge.name}</Title>
          <Content>
            <User>{challenge.challenge.user.nickname}</User>
            <JoinedUserWrap>
              <JoinedUserNum>{challenge.challenge.joinMember}</JoinedUserNum>
              <UserImg />
            </JoinedUserWrap>
          </Content>
        </Text>
      </Frame>
    </Link>
  );
};

const UserImg = styled.div`
  width: 18px;
  aspect-ratio: 1;

  background-image: url(${userProfile});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const JoinedUserNum = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

const JoinedUserWrap = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

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

export default JoinedChallenge;
