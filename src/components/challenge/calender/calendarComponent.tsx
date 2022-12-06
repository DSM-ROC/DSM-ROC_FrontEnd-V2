import {
  addDays,
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  startOfMonth,
  startOfWeek,
  subMonths,
} from 'date-fns';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Cell from './cell';
import MonthController from './monthController';
import WeekBar from './weekBar';

const CalendarComponent = (): JSX.Element => {
  const [monthStart, setMonthStart] = useState<Date>(startOfMonth(new Date()));
  const [monthEnd, setMonthEnd] = useState<Date>(endOfMonth(monthStart));
  const [startDate, setStartDate] = useState<Date>(startOfWeek(monthStart));
  const [endDate, setEndDate] = useState<Date>(endOfWeek(monthEnd));

  const preMonth = (): void => setMonthStart(subMonths(monthStart, 1));
  const nextMonth = (): void => setMonthStart(addMonths(monthStart, 1));

  useEffect(() => {
    setMonthEnd(endOfMonth(monthStart));
    setStartDate(startOfWeek(monthStart));
    setEndDate(endOfWeek(monthEnd));
  }, [monthStart]);

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
          date={date}
          day={getDay(date)}
          formattedDate={formattedDate}
          monthStart={monthStart}
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
      <MonthController
        monthStart={monthStart}
        preMonth={preMonth}
        nextMonth={nextMonth}
      />
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
