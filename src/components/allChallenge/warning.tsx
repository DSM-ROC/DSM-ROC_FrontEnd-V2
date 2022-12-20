import styled from 'styled-components';

export default function Warning() {
  return (
    <Container>
      <TextBox>
        <Text>챌린지 생성하기</Text>
        <WarningBox>
          <WarningItem>
            선정성, 폭력성 등을 포함, 부적절하다고 판단되었을 시 통보없이 삭제될
            수 있습니다.
          </WarningItem>
        </WarningBox>
      </TextBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TextBox = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.h2`
  width: 100%;
  margin-bottom: 40px;
  font-size: 30px;
`;

const WarningBox = styled.div`
  width: 100%;
  height: 80px;
  margin-bottom: 50px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 3px solid #1c7ed6;
  background-color: #f5f5f5;
`;

const WarningItem = styled.p`
  width: 100%;
  font-size: 18px;
`;
