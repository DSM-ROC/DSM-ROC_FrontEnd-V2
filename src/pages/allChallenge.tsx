import Banner from 'components/allChallenge/banner';
import ChallengeList from 'components/allChallenge/challengeList';
import Warning from 'components/allChallenge/warning';

const AllChallenge = () => {
  return (
    <>
      <Banner />
      <Warning />
      <ChallengeList />
    </>
  );
};

export default AllChallenge;
