import Banner from 'components/allChallenge/banner';
import ChallengeList from 'components/allChallenge/challengeList';
import Search from 'components/allChallenge/search';
import Warning from 'components/allChallenge/warning';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { getAllChallengeInfo } from 'utils/api/challenge/allChallenge';
import { challengeListRecoil } from 'utils/store/challengeList/challengeList';

const AllChallenge = () => {
  const setChallengeList = useSetRecoilState(challengeListRecoil);

  const getChallengeList = async () => {
    const res = await getAllChallengeInfo();
    setChallengeList(res);
  };

  useEffect(() => {
    getChallengeList();
  }, []);

  return (
    <>
      <Banner />
      <Warning />
      <Search />
      <ChallengeList />
    </>
  );
};

export default AllChallenge;
