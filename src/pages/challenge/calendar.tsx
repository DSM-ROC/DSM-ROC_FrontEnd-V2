import CalendarComponent from 'components/challenge/calender/calendarComponent';
import ChallengeInfoSection from 'components/common/challengeInfoSection/challengeInfoSection';
import { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getChallengeData } from 'utils/functions/challenge/challenge';
import { challengeInfoType } from 'utils/interface/challenge/challenge';

const Calendar = (): JSX.Element => {
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

    user: {
      nickname: '',
    },
  });

  const { challengeId } = useParams();

  const getData = async () => {
    setChallengeData(await getChallengeData(challengeId as string));
  };

  useLayoutEffect(() => {
    getData();
  }, []);

  return (
    <>
      <CalendarPage>
        <ChallengeInfoSection challengeData={challengeData} />
        <Title>챌린지 캘린더</Title>
        <CalendarComponent
          startDay={challengeData.startDay}
          endDay={challengeData.endDay}
        />
      </CalendarPage>
    </>
  );
};

const Title = styled.h1`
  font-size: 26px;
  margin-top: 80px;
  margin-bottom: 80px;
`;

const CalendarPage = styled.main`
  width: 65%;
  height: fit-content;
  min-height: 100px;
  margin: 0 auto;
  margin-bottom: 300px;
`;

export default Calendar;
