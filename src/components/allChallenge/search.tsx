import styled from 'styled-components';
import { search } from 'assets';
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import { challengeSearch } from 'utils/api/search/search';
import { useSetRecoilState } from 'recoil';
import { challengeListRecoil } from 'utils/store/challengeList/challengeList';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Search() {
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get('search');

  const [searchKeyword, setSearchKeyword] = useState<string>(searchQuery || '');
  const setChallengeList = useSetRecoilState(challengeListRecoil);
  const navigate = useNavigate();

  const changeSearchKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchKeyword(value);
  };

  const searchUrlChange = () => {
    navigate(`/challenges?search=${searchKeyword}`);
  };

  const getSearchedChallenge = async () => {
    const res = await challengeSearch(searchKeyword);
    console.log(searchKeyword, res);
    setChallengeList(res);
  };

  const getEnter = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') searchUrlChange();
  };

  useEffect(() => {
    getSearchedChallenge();
  }, [searchQuery]);
  useEffect(() => {
    return () => {
      navigate(`/challenges`);
    };
  }, []);

  return (
    <Container>
      <Wrapper>
        <Title>나에게 맞는 챌린지를 찾아보세요</Title>
        <InputBox>
          <Input
            placeholder="관심있는 분야를 검색하세요!"
            value={searchKeyword}
            onChange={changeSearchKeyword}
            onKeyDown={getEnter}
          ></Input>
          <SearchButton onClick={searchUrlChange} />
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
