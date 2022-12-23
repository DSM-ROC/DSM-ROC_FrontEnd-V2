import Banner from 'components/allChallenge/banner';
import ChallengeList from 'components/allChallenge/challengeList';
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
      <ChallengeList />
    </>
  );
};

export default AllChallenge;
