import {
  addDays,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  startOfWeek,
} from 'date-fns';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { calendarRecoil } from 'utils/store/calendar/calendar';
import Cell from './cell';
import MonthController from './monthController';
import WeekBar from './weekBar';

interface props {
  period: string;
}

const CalendarComponent = ({ period }: props): JSX.Element => {
  const monthStart = useRecoilValue(calendarRecoil);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const [sYear, sMonth, sDate] = period.split(' ')[0].split('.');
  const challengeStartDate = new Date(
    Number(sYear),
    Number(sMonth) - 1,
    Number(sDate),
  );

  const rows = [];
  let dates = [];
  let date = startDate;
  let count = 0;
  while (date <= endDate) {
    for (let i = 0; i < 7; i++) {
      const formattedDate = format(date, 'd');

      dates.push(
        <Cell
          key={formattedDate}
          challengeStartDate={challengeStartDate}
          date={date}
          day={getDay(date)}
          formattedDate={formattedDate}
        />,
      );
      date = addDays(date, 1);
    }
    rows.push(<Week key={count}>{dates}</Week>);
    count++;
    dates = [];
  }

  return (
    <>
      <MonthController />
      <WeekBar />
      <CalendarContainer>{rows}</CalendarContainer>
    </>
  );
};

const CalendarContainer = styled.div`
  border-top: #c6c6c6 1px solid;
  border-right: #c6c6c6 1px solid;
`;

const Week = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export default CalendarComponent;
