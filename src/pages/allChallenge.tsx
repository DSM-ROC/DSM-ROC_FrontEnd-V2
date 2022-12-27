import Banner from 'components/allChallenge/banner';
import ChallengeList from 'components/allChallenge/challengeList';
import Search from 'components/allChallenge/search';
import Warning from 'components/allChallenge/warning';

const AllChallenge = () => {
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
