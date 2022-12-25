import styled from 'styled-components';
import ChallengeCard from 'components/challengeCard/challengeCard';
import { useRecoilValue } from 'recoil';
import { useState } from 'react';
import { challengeSortKey } from 'utils/interface/challengeSortKey/challengeSortKey';
import { theme } from 'styles/theme';
import { sortedChallenge } from 'utils/store/challengeList/selector/sortedChallenge';

export default function ChallengeList() {
  const [challengeSortKey, setChallengeSortKey] =
    useState<challengeSortKey>('new');
  const challengeList = useRecoilValue(sortedChallenge(challengeSortKey));

  const changeSortKey = (newSortKey: challengeSortKey) => {
    setChallengeSortKey(newSortKey);
  };

  return (
    <Container>
      <Wrapper>
        <TextBox>
          <Text
            isSelected={challengeSortKey === 'new'}
            onClick={() => changeSortKey('new')}
          >
            최신순
          </Text>
          <Text
            isSelected={challengeSortKey === 'popular'}
            onClick={() => changeSortKey('popular')}
          >
            인기순
          </Text>
        </TextBox>
        <Frame>
          {challengeList.map((challenge, i) => (
            <ChallengeCard challenge={challenge} key={i} />
          ))}
        </Frame>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 80%;
`;

const TextBox = styled.ul`
  width: 100%;
  margin-top: 80px;
  gap: 30px;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const Text = styled.li`
  font-weight: 600;
  cursor: pointer;

  color: ${({ isSelected }: { isSelected: boolean }) =>
    isSelected ? theme.mainBlueColor : theme.blackContentColor};
`;

const Frame = styled.div`
  width: 100%;
  margin: 40px 0 170px;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-row-gap: 50px;
`;
