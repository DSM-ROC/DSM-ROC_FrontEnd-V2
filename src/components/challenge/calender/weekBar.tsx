import styled from 'styled-components';
import { theme } from 'styles/theme';

const WeekBar = (): JSX.Element => {
  return (
    <WeekContainer>
      <Sunday>일</Sunday>
      <WeekDay>월</WeekDay>
      <WeekDay>화</WeekDay>
      <WeekDay>수</WeekDay>
      <WeekDay>목</WeekDay>
      <WeekDay>금</WeekDay>
      <Saturday>토</Saturday>
    </WeekContainer>
  );
};

const WeekDay = styled.p`
  font-size: 18px;
  text-align: center;
  font-family: 'Noto Sans KR';
`;

const Sunday = styled(WeekDay)`
  color: ${theme.sundayColor};
`;
const Saturday = styled(WeekDay)`
  color: ${theme.saturdayColor};
`;

const WeekContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 20px;
`;

export default WeekBar;
