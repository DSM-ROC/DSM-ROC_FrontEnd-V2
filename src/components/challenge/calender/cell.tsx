import { isSameMonth } from 'date-fns';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
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
      </CellContainer>
    </>
  );
};

const DayNumber = styled.p`
  font-size: 18px;
  top: 7px;
  left: 12px;
  position: absolute;
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
