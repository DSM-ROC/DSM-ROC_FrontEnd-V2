import {
  addDays,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  getMonth,
  startOfMonth,
  startOfWeek,
  subMonths,
} from 'date-fns';
import styled from 'styled-components';
import Cell from './cell';

const CalendarComponent = (): JSX.Element => {
  const monthStart = startOfMonth(new Date());
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  console.log(getMonth(monthStart));

  const rows = [];
  let dates = [];
  let date = startDate;
  while (date <= endDate) {
    for (let i = 0; i < 7; i++) {
      const formattedDate = format(date, 'd');

      dates.push(
        <Cell
          date={date}
          day={getDay(date)}
          formattedDate={formattedDate}
          monthStart={monthStart}
        />,
      );
      date = addDays(date, 1);
    }
    rows.push(<Week>{dates}</Week>);
    dates = [];
  }

  return (
    <>
      <>
        <CalendarContainer>{rows}</CalendarContainer>
      </>
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
