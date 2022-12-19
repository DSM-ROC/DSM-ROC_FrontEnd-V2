import { detailDocs } from 'docs/detail/detailDocs';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { falseLike } from 'assets';
import { trueLike } from 'assets';
import { useState } from 'react';

export default function Title() {
  const [like, setLike] = useState(false);
  return (
    <>
      <Container>
        <Summary>{detailDocs.title}</Summary>
        <Wrapper>
          <User>{detailDocs.user}</User>
          <Date>{detailDocs.date}</Date>
          <LikeBox>
            <Like>{detailDocs.like}</Like>
            {like === false ? (
              <FalseLike src={falseLike}></FalseLike>
            ) : (
              <TrueLike src={trueLike}></TrueLike>
            )}
          </LikeBox>
        </Wrapper>
        <Tagbox>
          {detailDocs.tag.map((tag) => (
            <Tag>{tag}</Tag>
          ))}
        </Tagbox>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 70vw;
  margin-top: 40px;
  padding-bottom: 30px;
  border-bottom: 1px solid ${theme.darkGray};
`;

const Summary = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: ${theme.blackContentColor};
`;

const Wrapper = styled.div`
  gap: 8px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const User = styled.p`
  font-size: 14px;
  font-weight: 800;
`;

const Date = styled.p`
  font-size: 14px;
`;

const LikeBox = styled.div`
  gap: 2px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Like = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${theme.uiRedColor};
`;

const Tagbox = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 14px;
`;

const Tag = styled.p`
  padding: 6px 34px;
  border-radius: 20px;
  border: 1px solid ${theme.mainBlueColor};
  color: ${theme.mainBlueColor};
`;

const Image = styled.img`
  width: 16px;
`;

const FalseLike = styled(Image)``;

const TrueLike = styled(Image)``;
