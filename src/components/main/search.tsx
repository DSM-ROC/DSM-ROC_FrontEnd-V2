import styled from 'styled-components';
import { search } from 'assets';

export default function Search() {
  return (
    <Container>
      <Wrapper>
        <Title>나에게 맞는 챌린지를 찾아보세요</Title>
        <InputBox>
          <Input placeholder="관심있는 분야를 검색하세요!"></Input>
          <Image src={search}></Image>
        </InputBox>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 150px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h2`
  margin-bottom: 30px;
  color: #1864ab;
  font-size: 26px;
`;

const InputBox = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 660px;
  height: 60px;
  padding-left: 28px;
  font-size: 16px;
  border-radius: 30px;
  border: 1px solid #808080;
`;

const Image = styled.img`
  position: absolute;
  top: 24%;
  right: 20px;
  width: 30px;
`;
