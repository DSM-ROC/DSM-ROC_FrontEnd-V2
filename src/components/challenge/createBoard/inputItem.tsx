import { ChangeEvent, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { createBoard } from 'utils/api/createBoard';
import ToastError from 'utils/functions/errorMessage';
import { createBoardType } from 'utils/interface/createBoard/createBoard';

export default function InputItem() {
  const challengeId = useParams().challengeId as string;
  const navigate = useNavigate();

  const [createBoardData, setCreateBoardData] = useState<createBoardType>({
    title: '',
    text: '',
  });

  const changeBoardData = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    let { value, name } = e.target;

    setCreateBoardData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const submit = async () => {
    if (!createBoardData.title) {
      ToastError('제목을 작성해주세요!!');
      return null;
    }
    if (!createBoardData.text) {
      ToastError('내용을 작성해주세요!!');
      return null;
    }
    try {
      await createBoard(challengeId, createBoardData);
      toast.success('게시글이 작성되었습니다!');
      navigate(`/challenge/${challengeId}/board`);
    } catch (error) {
      ToastError('게시글을 작성할 수  없어요!!');
    }
  };

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
          <Input
            placeholder="게시글 제목을 입력해주세요"
            onChange={changeBoardData}
            name="title"
            value={createBoardData.title}
          ></Input>
        </FildBox>
        <FildBox>
          <Fild id="content">내용</Fild>
          <Textarea
            placeholder="게시글 내용을 입력해주세요"
            onChange={changeBoardData}
            name="text"
            value={createBoardData.text}
          ></Textarea>
        </FildBox>

        <ButtonBox>
          <Button onClick={submit}>게시글 생성하기</Button>
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
  margin-bottom: 200px;
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
