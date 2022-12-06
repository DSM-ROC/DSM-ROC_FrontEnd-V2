import { arrow } from 'assets';
import { getMonth, getYear } from 'date-fns';
import styled from 'styled-components';

interface props {
  monthStart: Date;
  preMonth: () => void;
  nextMonth: () => void;
}

const MonthController = ({
  monthStart,
  preMonth,
  nextMonth,
}: props): JSX.Element => {
  return (
    <MonthControllerContainer>
      <PreMonthBtn onClick={preMonth} />
      <Date>
        {getYear(monthStart)}년 {getMonth(monthStart) + 1}월
      </Date>
      <NextMonthBtn onClick={nextMonth} />
    </MonthControllerContainer>
  );
};

const PreMonthBtn = styled.button`
  height: 25px;
  aspect-ratio: 1;
  border: 0;

  background-color: transparent;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  cursor: pointer;
`;

const NextMonthBtn = styled(PreMonthBtn)`
  transform: rotate(180deg);
`;

const Date = styled.div`
  font-size: 28px;
  font-weight: bold;
`;

const MonthControllerContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;

  margin: 0 auto;
  margin-bottom: 60px;
`;

export default MonthController;
