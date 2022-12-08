import { arrow } from 'assets';
import { addMonths, getMonth, getYear, subMonths } from 'date-fns';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { calendarRecoil } from 'utils/store/calendar/calendar';

const MonthController = (): JSX.Element => {
  const [monthStart, setMonthStart] = useRecoilState(calendarRecoil);

  const preMonth = (): void => setMonthStart(subMonths(monthStart, 1));
  const nextMonth = (): void => setMonthStart(addMonths(monthStart, 1));

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
