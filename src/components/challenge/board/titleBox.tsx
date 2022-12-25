import styled from 'styled-components';
import { theme } from 'styles/theme';

export default function TitleBox() {
  const item = ['안희명', '남승권'];
  return (
    <Contaienr>
      <Wrapper>
        <Summary>React JS 공부 챌린지</Summary>
        <Frame>
          <User>안희명남승권</User>
          <DateBox>
            <StartDate>2022.11.22</StartDate>~<LasttDate>2022.12.22</LasttDate>
          </DateBox>
        </Frame>
        <TogBox>
          {item.map((tag) => (
            <Tag>{tag}</Tag>
          ))}
        </TogBox>
      </Wrapper>
    </Contaienr>
  );
}

const Contaienr = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 70%;
  margin-top: 40px;
  padding-bottom: 30px;
  border-bottom: 1px solid ${theme.darkGray};
`;

const Summary = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: ${theme.blackContentColor};
`;

const Frame = styled.div`
  gap: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const User = styled.div`
  font-size: 14px;
  font-weight: 800;
`;

const DateBox = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DateBoxItem = styled.p`
  font-size: 14px;
`;

const StartDate = styled(DateBoxItem)``;

const LasttDate = styled(DateBoxItem)``;

const TogBox = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 14px;
`;

const Tag = styled.div`
  padding: 6px 34px;
  border-radius: 20px;
  border: 1px solid ${theme.mainBlueColor};
  color: ${theme.mainBlueColor};
`;
