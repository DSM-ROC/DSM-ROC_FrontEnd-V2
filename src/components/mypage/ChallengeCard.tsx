import { useState } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

import { background, falseLike, trueLike } from '../../assets';

interface Props {
  title: string;
  user: string;
  likeNum: number;
  img: string;
}

function ChallengeCard({ title, user, likeNum, img }: Props) {
  const [like, setLike] = useState(false);

  const CikeClick = () => {
    setLike(!like);
  };

  return (
    <>
      <Challenges>
        <ChallengeImg src={background}></ChallengeImg>
        <ChallengeTitle>{title}</ChallengeTitle>
        <Content>
          <ChallengeUsername>{user}</ChallengeUsername>
          <LikeBox>
            <LikeNum onClick={CikeClick}>
              {like === true ? likeNum + 1 : likeNum}
            </LikeNum>
            {like === false ? (
              <Hart onClick={CikeClick} src={falseLike}></Hart>
            ) : (
              <Hart onClick={CikeClick} src={trueLike}></Hart>
            )}
          </LikeBox>
        </Content>
      </Challenges>
    </>
  );
}

const Challenges = styled.div`
  width: 283px;
  height: 285px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  margin-right: 30px;
  cursor: pointer;
`;
const ChallengeImg = styled.img`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const ChallengeWrapper = styled.div`
  height: 310px;
  display: flex;
  flex-direction: row;
  overflow: auto;
  white-space: nowrap;
`;

const ChallengeTitle = styled.b`
  margin-top: 12px;
  margin-left: 14px;
  color: ${theme.darkGray};
  font-size: 20;
`;

const ChallengeUsername = styled.span`
  color: ${theme.darkGray};
  font-size: 14px;
  margin-left: 14px;
`;

const Hart = styled.img`
  width: 18px;
  height: 16px;
`;

const Content = styled.div`
  width: 90%;
  margin-top: 16px;
  display: flex;

  align-items: center;
  justify-content: space-between;
`;

const LikeBox = styled.div`
  gap: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LikeNum = styled.div`
  color: ${theme.uiRedColor};
  font-size: 16px;
  font-weight: 600;
`;

export default ChallengeCard;
