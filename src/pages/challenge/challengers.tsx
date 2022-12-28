import ChallengeInfoSection from 'components/common/challengeInfoSection/challengeInfoSection';
import { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { challengeInfoType } from 'utils/interface/challenge/challenge';
import { Crown } from 'assets';
import { getChallenger } from 'utils/api/challenger/challenger';
import { challengerTpye } from 'utils/interface/challenger/challenger';
import ToastError from 'utils/functions/errorMessage';
import { getChallengeData } from 'utils/functions/challenge/challenge';
import MemberCard from 'components/memberCard';
import { userDataType } from 'utils/interface/user/user';
import { getUserData } from 'utils/api/userData/userData';

const Challengers = (): JSX.Element => {
  const challengeId = useParams().challengeId as string;
  const [challengerList, setChallengerList] = useState<challengerTpye[]>([]);
  const [isHost, setIsHost] = useState<boolean>(false);
  const [hostChallenger, setHostChallenger] = useState<challengerTpye>({
    userId: 0,
    user: {
      id: 0,
      nickname: '',
    },
  });

  const [challengeData, setChallengeData] = useState<challengeInfoType>({
    id: 0,
    name: '',
    introduction: '',
    limitMember: 0,
    joinMember: 0,
    topic: '코딩',
    startDay: new Date(),
    endDay: new Date(),
    createdAt: new Date(),
    coverImage: '',

    user: {
      id: '',
      nickname: '',
    },
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const findHost = (
    challengerListRes: challengerTpye[],
    challengeDataRes: challengeInfoType,
    userDataRes: userDataType,
  ) => {
    const hostData = challengerListRes.find(
      (challenger) => challenger.userId === parseInt(challengeDataRes.user.id),
    );

    if (!hostData) {
      ToastError('챌린지 방장을 찾을 수 없습니다!!');
    } else {
      setIsHost(userDataRes.id === hostData.userId);
      setHostChallenger(hostData);
    }
  };

  const getData = async () => {
    setIsLoading(true);
    const challengeDataRes = await getChallengeData(challengeId as string);
    setChallengeData(challengeDataRes);

    const challengerListRes = await getChallenger(challengeId);
    setChallengerList(challengerListRes);

    const userDataRes = await getUserData();

    findHost(challengerListRes, challengeDataRes, userDataRes);
    setIsLoading(false);
  };

  useLayoutEffect(() => {
    getData();
  }, []);

  return (
    <>
      <ChallengerPage>
        <ChallengeInfoSection challengeData={challengeData} />
        {isLoading ? (
          <></>
        ) : (
          <>
            <Title>챌린저 목록</Title>
            <ChallengeHost>
              <HostCircle />
              <HostName>
                <b>[챌린지 방장]</b>&nbsp;{hostChallenger.user.nickname}
              </HostName>
            </ChallengeHost>
            {challengerList
              .filter((challenger) => challenger !== hostChallenger)
              .map((challenger) => (
                <MemberCard
                  key={challenger.userId}
                  challengerInfo={challenger.user}
                  isHost={isHost}
                />
              ))}
          </>
        )}
      </ChallengerPage>
    </>
  );
};

export default Challengers;

const HostName = styled.p`
  font-size: 20px;
`;

const Title = styled.h1`
  font-size: 26px;
  margin-top: 80px;
`;

const ChallengerPage = styled.div`
  width: 65%;
  height: fit-content;
  min-height: 100px;
  margin: 0 auto;
  margin-bottom: 300px;
`;

const ChallengeHost = styled.div`
  width: 100%;
  height: 140px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  margin: 80px 0;
  display: flex;
  align-items: center;
`;

const HostCircle = styled.div`
  width: 70px;
  aspect-ratio: 1;
  background-color: ${theme.uiBlueColor};
  border-radius: 50%;
  margin: 0 20px 0 47px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${Crown});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 34px;
`;
