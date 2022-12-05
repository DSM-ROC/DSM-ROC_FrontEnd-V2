import { isSameDay, isSameMonth } from 'date-fns';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { theme } from 'styles/theme';
import { dayType } from 'utils/interface/calendar/caledar';

interface props {
  date: Date;
  day: dayType;
  formattedDate: string;
  monthStart: Date;
}

const Cell = ({ date, formattedDate, day, monthStart }: props): JSX.Element => {
  console.log({ date, formattedDate, monthStart, day });
  return (
    <>
      <CellContainer day={day}>
        <DayNumber>
          {isSameMonth(date, monthStart) ? formattedDate : ''}
        </DayNumber>
        {isSameMonth(date, monthStart) && date <= new Date() && (
          <TodayComment>오늘의 메모🔥</TodayComment>
        )}
      </CellContainer>
    </>
  );
};

const DayNumber = styled.p`
  font-size: 18px;
  top: 7px;
  left: 7px;
  position: absolute;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
`;

const TodayComment = styled.div`
  width: 80%;
  background-color: white;
  border: 0.5px solid #c6c6c6;

  display: flex;
  align-items: center;
  padding: 10px 0;
  padding-left: 10px;

  font-size: 10px;
  border-radius: 5px;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  cursor: pointer;
`;

const determiningBackgroundColor = ({
  day,
}: {
  day: dayType;
}): FlattenSimpleInterpolation => {
  const bgColor = day === 0 || day === 6 ? '#DBEFFF' : '#F6FBFF';

  return css`
    background-color: ${bgColor};
    border-left: #c6c6c6 1px solid;
    border-bottom: #c6c6c6 1px solid;
  `;
};

const CellContainer = styled.div`
  width: 100%;
  aspect-ratio: 14/13;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  ${determiningBackgroundColor};
`;

export default Cell;
