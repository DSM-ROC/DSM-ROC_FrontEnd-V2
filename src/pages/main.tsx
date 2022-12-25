import styled from 'styled-components';
import Banner from 'components/main/banner';
import Search from 'components/main/search';
import Recent from 'components/main/recent';
import { challengeListRecoil } from 'utils/store/challengeList/challengeList';
import { useSetRecoilState } from 'recoil';
import { getAllChallengeInfo } from 'utils/api/challenge/allChallenge';
import { useEffect } from 'react';

const Main = (): JSX.Element => {
  const setAllChallengeInfo = useSetRecoilState(challengeListRecoil);

  const getChallenge = async () => {
    setAllChallengeInfo(await getAllChallengeInfo());
  };

  useEffect(() => {
    getChallenge();
  }, []);

  return (
    <Container>
      <Banner />
      <Search />
      <Recent />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100%;
  margin-bottom: 180px;
`;
