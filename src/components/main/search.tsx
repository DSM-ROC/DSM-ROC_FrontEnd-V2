import styled from 'styled-components';
import { search } from 'assets';
import { ChangeEvent, useState } from 'react';

export default function Search() {
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  const changeSearchKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchKeyword(value);
  };

  return (
    <Container>
      <Wrapper>
        <Title>나에게 맞는 챌린지를 찾아보세요</Title>
        <InputBox>
          <Input
            placeholder="관심있는 분야를 검색하세요!"
            value={searchKeyword}
            onChange={changeSearchKeyword}
          ></Input>
          <SearchButton />
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
  outline: none;
`;

const SearchButton = styled.button`
  position: absolute;

  top: 24%;
  right: 20px;
  width: 30px;
  aspect-ratio: 1;

  background-image: url(${search});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  background-color: transparent;
  border: none;
  cursor: pointer;
`;
