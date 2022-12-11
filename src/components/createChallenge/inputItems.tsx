import styled from 'styled-components';
import { theme } from 'styles/theme';
import { defaultImg } from 'assets';
import { ChangeEvent, useState } from 'react';

export default function InputItems() {
  const [imgView, setImgView] = useState<string>('');

  const fileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files as FileList;
    const theFile = fileList[0];

    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      }: any = finishedEvent;

      setImgView(result);
    };
    await reader.readAsDataURL(theFile);
  };

  return (
    <Container>
      <TextBox>
        <Text>챌린지 생성하기</Text>
        <WarningBox>
          <Warning>
            선정성, 폭력성 등을 포함, 부적절하다고 판단되었을 시 통보없이 삭제될
            수 있습니다.
          </Warning>
        </WarningBox>
      </TextBox>

      <FildBox>
        <Fild>사진</Fild>
        <Label htmlFor="input-file">
          <Image imgView={imgView} />
        </Label>
        <ImgInput type="file" id="input-file" onChange={fileChange} />
      </FildBox>
      <FildBox>
        <Fild>제목</Fild>
        <LongInput placeholder="챌린지 제목을 입력해주세요"></LongInput>
      </FildBox>
      <FildBox>
        <Fild>내용</Fild>
        <TextArea placeholder="챌린지 내용을 입력해주세요"></TextArea>
      </FildBox>
      <Frame>
        <FildBox>
          <Fild>인원수</Fild>
          <ShortInput placeholder="2~50명 이내로 인원 수를 입력해주세요"></ShortInput>
        </FildBox>
        <FildBox>
          <Fild>카테고리</Fild>
          <ShortInput placeholder="카테고리를 선택해주세요"></ShortInput>
        </FildBox>
      </Frame>

      <Frame>
        <FildBox>
          <Fild>챌린지 시작 기간</Fild>
          <ShortInput
            type="date"
            placeholder="챌린지 시작 날짜를 골라주세요"
          ></ShortInput>
        </FildBox>
        <FildBox>
          <Fild>챌린지 마감 기간</Fild>
          <ShortInput
            type="date"
            placeholder="챌린지 마감 날짜를 골라주세요"
          ></ShortInput>
        </FildBox>
      </Frame>

      <Button type="submit">챌린지 생성하기</Button>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  margin: 170px 0 180px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TextBox = styled.div`
  width: 80vw;
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

const Warning = styled.p`
  width: 100%;
  font-size: 18px;
`;

const FildBox = styled.div`
  width: 80vw;
  margin-bottom: 50px;
`;

const Cover = styled.div``;

const Frame = styled.div`
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    &:last-child {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      flex-direction: column;
      p {
        width: 96%;
        text-align: start;
      }
    }
  }
`;

const Fild = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
  color: ${theme.darkGray};
`;

const Input = styled.input`
  height: 60px;
  padding: 0 20px;
  border: 1px solid #5b5b5b;
  border-radius: 2px;
  outline: none;
  background-color: #f5f5f5;
  color: ${theme.blackContentColor};
`;

const LongInput = styled(Input)`
  width: 100%;
`;

const ShortInput = styled(Input)`
  width: 96%;
`;

const ImgInput = styled.input`
  display: none;
`;

const Label = styled.label`
  width: 100%;
  height: 600px;
`;

const choiceBackground = ({ imgView }: { imgView: string }) => {
  return imgView || defaultImg;
};

const Image = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(${choiceBackground});
  background-position: center;
  background-repeat: repeat;
  background-size: cover;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 20px 0 0 20px;
  border: 1px solid #5b5b5b;
  border-radius: 2px;
  background-color: #f5f5f5;
  color: ${theme.blackContentColor};
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
