import styled from 'styled-components';
import { theme } from 'styles/theme';
import { defaultImg } from 'assets';
import { ChangeEvent, useState } from 'react';
import { createChallenge } from 'utils/api/challenge/createChallenge';
import { format } from 'date-fns';
import { createChallengeType } from 'utils/interface/createChallenge/createChallenge';

export default function InputItems() {
  const [imgView, setImgView] = useState<string>('');
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [createChallengeData, setCreateChallengeData] =
    useState<createChallengeType>({
      name: '',
      introduction: '',
      password: '',
      startDay: format(new Date(), 'yyyy-MM-dd'),
      endDay: format(new Date(), 'yyyy-MM-dd'),
      limitMember: 10,
      topic: '코딩',
    });

  const changeChallengeData = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value, name } = e.target;

    setCreateChallengeData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const fileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files as FileList;
    const theFile = fileList[0];

    setImgFile(theFile);

    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      }: any = finishedEvent;

      setImgView(result);
    };
    await reader.readAsDataURL(theFile);
  };

  /** 챌린지 생성 조건 확인 */
  const confirmCreationConditions = (): boolean => {
    if (!createChallengeData.name) {
      alert('챌린지명을 작성하세요!');
      return true;
    }

    const dateSecond = 24 * 60 * 60 * 1000;
    const today = new Date(format(new Date(), 'yyyy-MM-dd'));

    const startDay = new Date(createChallengeData.startDay);
    const endDay = new Date(createChallengeData.endDay);

    if (startDay > endDay) {
      alert('종료일이 시작일보다 앞일 수 없어요!');
      return true;
    }
    if (startDay < today) {
      console.log(startDay);
      console.log(new Date().getTime());

      alert(`챌린지가 이전에 시작될 수 없어요!`);
      return true;
    }
    if (endDay.getTime() - startDay.getTime() < dateSecond * 7) {
      alert(`챌린지는 7일 이상이어야 해요!!`);
      return true;
    }
    if (endDay.getTime() - startDay.getTime() > dateSecond * 30) {
      alert(`챌린지는 30일 이내이어야 해요!!`);
      return true;
    }

    return false;
  };

  const submit = async () => {
    console.log(createChallengeData);

    if (confirmCreationConditions()) return null;

    const formData = new FormData();
    formData.append('name', createChallengeData.name);
    formData.append('introduction', createChallengeData.introduction);
    formData.append('password', createChallengeData.password);
    formData.append('startDay', createChallengeData.startDay);
    formData.append('endDay', createChallengeData.endDay);
    formData.append('limitMember', createChallengeData.limitMember.toString());
    formData.append('topic', createChallengeData.topic);
    if (imgFile) {
      formData.append('image', imgFile);
    }

    createChallenge(formData);
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
        <Fild>챌린지명</Fild>
        <LongInput
          placeholder="챌린지명을 입력해주세요"
          onChange={changeChallengeData}
          name="name"
          value={createChallengeData.name}
        ></LongInput>
      </FildBox>
      <FildBox>
        <Fild>설명</Fild>
        <TextArea
          placeholder="챌린지 설명을 입력해주세요"
          onChange={changeChallengeData}
          name="introduction"
          value={createChallengeData.introduction}
        ></TextArea>
      </FildBox>
      <Frame>
        <FildBox>
          <Fild>인원수</Fild>
          <ShortInput
            type="number"
            placeholder="5~30명 이내로 인원 수를 입력해주세요"
            onChange={changeChallengeData}
            name="limitMember"
            value={createChallengeData.limitMember}
          ></ShortInput>
        </FildBox>
        <FildBox>
          <Fild>카테고리</Fild>
          <CategorySelecter>
            {[
              '코딩',
              '스터디',
              '운동',
              '독서',
              '미술',
              '음악',
              '취업',
              '자격증',
              '기타',
            ].map((category: string, i) => (
              <option key={i}>{category}</option>
            ))}
          </CategorySelecter>
        </FildBox>
      </Frame>
      <Frame>
        <FildBox>
          <Fild>챌린지 시작 기간</Fild>
          <ShortInput
            type="date"
            placeholder="챌린지 시작 날짜를 골라주세요"
            onChange={changeChallengeData}
            value={createChallengeData.startDay}
            name="startDay"
          ></ShortInput>
        </FildBox>
        <FildBox>
          <Fild>챌린지 마감 기간</Fild>
          <ShortInput
            type="date"
            placeholder="챌린지 마감 날짜를 골라주세요"
            onChange={changeChallengeData}
            value={createChallengeData.endDay}
            name="endDay"
          ></ShortInput>
        </FildBox>
      </Frame>

      <Button onClick={submit}>챌린지 생성하기</Button>
    </Container>
  );
}

const Container = styled.div`
  width: 60%;
  margin: 100px auto 180px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TextBox = styled.div`
  width: 100%;
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
  width: 100%;
  margin-bottom: 50px;
`;

// const Cover = styled.div``;

const Frame = styled.div`
  width: 100%;
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
  font-size: 18px;
`;

const LongInput = styled(Input)`
  width: 100%;
`;

const ShortInput = styled(Input)`
  width: 96%;
`;

const CategorySelecter = styled.select`
  height: 60px;
  width: 96%;

  padding: 0 20px;
  border: 1px solid #5b5b5b;
  border-radius: 2px;
  outline: none;
  background-color: #f5f5f5;
  color: ${theme.blackContentColor};
  font-size: 18px;
`;

const ImgInput = styled.input`
  display: none;
`;

const Label = styled.label`
  width: 100%;
  height: 600px;
  cursor: pointer;
`;

const choiceBackground = ({ imgView }: { imgView: string }) => {
  return imgView || defaultImg;
};

const Image = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(${choiceBackground});
  background-position: center;
  background-repeat: no-repeat;
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
  resize: none;
  outline: none;
  font-size: 18px;
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
