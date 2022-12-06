import CalendarComponent from 'components/challenge/calender/calendarComponent';
import ChallengeInfoSection from 'components/common/challengeInfoSection/challengeInfoSection';
import { addMonths, startOfMonth, subMonths } from 'date-fns';
import { useState } from 'react';
import styled from 'styled-components';

const challengeData = {
  title: 'React 공부하기',
  writer: '배준수',
  period: '2022.11.22 ~ 2022.12.22',
  tags: [
    'React',
    'Programing',
    'Study',
    'TypeScript',
    'TypeScriptTypeScriptTypeScriptTypeScript',
  ],
};

const Calendar = (): JSX.Element => {
  const [monthStart, setMonthStart] = useState<Date>(startOfMonth(new Date()));

  const preMonth = (): void => setMonthStart(subMonths(monthStart, 1));
  const nextMonth = (): void => setMonthStart(addMonths(monthStart, 1));

  return (
    <>
      <CalendarPage>
        <ChallengeInfoSection challengeData={challengeData} />
        <Title>챌린지 캘린더</Title>
        <CalendarComponent
          period={challengeData.period}
          monthStart={monthStart}
          preMonth={preMonth}
          nextMonth={nextMonth}
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
`;

export default Calendar;
