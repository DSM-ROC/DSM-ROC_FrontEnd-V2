import MemberCard from 'components/memberCard';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import crown from '../../assets/img/challenger/Crown.png';
import trashcan from '../../assets/img/challenger/trashcan.png';

const Challengers = (): JSX.Element => {
  const Member = [
    {
      rank: '[챌린저]',
      name: '뿡뿡이',
      img: trashcan,
    },
    {
      rank: '[챌린저]',
      name: '뿡뿡이',
    },
    {
      rank: '[챌린저]',
      name: '뿡뿡이',
    },
  ];
  return (
    <>
      <ChallengerPage>
        <Challenge>
          <ChallengeName>
            <b>React JS 공부 챌린지</b>
          </ChallengeName>
          <Sort>
            <Text>
              <b>뿡뿡이</b>
            </Text>
            <Date>
              <b>2022.11.22 ~ 2022.12.22</b>
            </Date>
          </Sort>
          <Category>
            <Category1>React</Category1>
            <Category2>프로그래밍</Category2>
            <Category3>공부</Category3>
          </Category>
        </Challenge>
        <ChallengerList>
          <b>챌린저 목록</b>
        </ChallengerList>
        <Challenger>
          <ChallengeHost>
            <HostCircle>
              <Crown src={crown} />
            </HostCircle>
            <b>[챌린지 방장]</b>&nbsp;진격의 규짱
          </ChallengeHost>
          {Member.map((member) => (
            <MemberCard img={member.img} rank={member.rank} name={member.name} />
          ))}
        </Challenger>
      </ChallengerPage>
    </>
  );
};

export default Challengers;

const ChallengerPage = styled.div`
  width: 100% ;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Challenge = styled.div`
  width: 992px;
  height: 226px;
  border-bottom: 1px solid ${theme.darkGray};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-bottom: 38px;
  margin-top: 54px;
`;
const ChallengeName = styled.div`
  font-size: 50px;
`;
const Sort = styled.div`
  display: flex;
  align-items: center;
`;
const Text = styled.div`
  font-size: 14px;
  margin-right: 8px;
`;
const Date = styled.div`
  color: ${theme.darkGray};
`;
const Category = styled.div`
  width: 374px;
  color: ${theme.mainBlueColor};
  font-size: 14px;
  display: flex;
  justify-content: space-between;
`;
const Category1 = styled.div`
  width: 111px;
  height: 34px;
  border-radius: 30px;
  border: 1px solid ${theme.mainBlueColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Category2 = styled.div`
  width: 135px;
  height: 34px;
  border-radius: 30px;
  border: 1px solid ${theme.mainBlueColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Category3 = styled.div`
  width: 96px;
  height: 34px;
  border-radius: 30px;
  border: 1px solid ${theme.mainBlueColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ChallengerList = styled.div`
  font-size: 32px;
  position: absolute;
  top: 512px;
  left: 270px;
`;
const ChallengeHost = styled.div`
  width: 992px;
  height: 160px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  margin: 227px 0 80px 0;
  display: flex;
  align-items: center;
`;
const HostCircle = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${theme.uiBlueColor};
  border-radius: 50%;
  margin: 0 20px 0 47px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Crown = styled.img`
  width: 34px;
  height: 29.75px;
`;
const Challenger = styled.div`
  font-size: 24px;
`;
