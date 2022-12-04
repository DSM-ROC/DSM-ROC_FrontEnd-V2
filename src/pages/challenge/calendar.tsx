import ChallengeInfoSection from 'components/common/challengeInfoSection/challengeInfoSection';
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
  return (
    <>
      <CalendarPage>
        <ChallengeInfoSection challengeData={challengeData} />
      </CalendarPage>
    </>
  );
};

const CalendarPage = styled.main`
  width: 65%;
  height: fit-content;
  min-height: 100px;
  margin: 0 auto;
`;

export default Calendar;
