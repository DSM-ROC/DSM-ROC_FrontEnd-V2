import styled from 'styled-components';
import { theme } from 'styles/theme';

export default function InputItem() {
  return (
    <Container>
      <Wrapper>
        <Summary>게시글 생성하기</Summary>
        <WarningBox>
          <Warning>
            선정성, 폭력성 등을 포함, 부적절하다고 판단되었을 시 통보없이 삭제될
            수 있습니다.
          </Warning>
        </WarningBox>

        <FildBox>
          <Fild>제목</Fild>
          <Input placeholder="게시글 제목을 입력해주세요"></Input>
        </FildBox>
        <FildBox>
          <Fild id="content">내용</Fild>
          <Textarea placeholder="게시글 내용을 입력해주세요"></Textarea>
        </FildBox>

        <ButtonBox>
          <Button>게시글 생성하기</Button>
        </ButtonBox>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 80%;
  margin-top: 70px;
`;

const Summary = styled.h2`
  margin-bottom: 30px;
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

const Warning = styled.p`
  width: 100%;
  font-size: 18px;
`;

const FildBox = styled.div`
  #content {
    margin-top: 80px;
  }
`;

const Fild = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
  color: ${theme.darkGray};
`;

const Input = styled.input`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  border: 1px solid #5b5b5b;
  border-radius: 2px;
  outline: none;
  background-color: #f5f5f5;
  color: ${theme.blackContentColor};
  font-size: 16px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 260px;
  padding: 20px 0 0 20px;
  border: 1px solid #5b5b5b;
  border-radius: 2px;
  outline: none;
  background-color: #f5f5f5;
  color: ${theme.blackContentColor};
  font-size: 16px;
  resize: none;
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  width: 460px;
  height: 60px;
  margin-top: 60px;
  border: none;
  border-radius: 4px;
  outline: none;
  font-size: 18px;
  font-weight: 600;
  color: ${theme.whiteContentColor};
  background-color: ${theme.mainBlueColor};
`;
