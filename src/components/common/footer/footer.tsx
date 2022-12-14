import styled from 'styled-components';
import { theme } from 'styles/theme';
import { whiteLogo } from 'assets';
import { facebook } from 'assets';
import { github } from 'assets';
import { Outlet } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <Outlet />
      <Container>
        <Wrapper>
          <Cover>
            <ProjectLogo src={whiteLogo} />
            <Text>
              <Front>
                <Fild>Frontend</Fild>
                <Names>
                  <a href="https://github.com/HungryMinsung">
                    <Name>김민성</Name>
                  </a>
                  <a href="https://github.com/baejoonsoo">
                    <Name>배준수</Name>
                  </a>
                  <a href="https://github.com/yoon-ho7">
                    <Name>신윤호</Name>
                  </a>
                  <a href="https://github.com/waterbeen0530">
                    <Name>임수빈</Name>
                  </a>
                </Names>
              </Front>
              <Back>
                <Fild>Back-end</Fild>
                <Names>
                  <a href="https://github.com/skmn3">
                    <Name>박상진</Name>
                  </a>
                  <a href="https://github.com/2yev1n">
                    <Name>이예빈</Name>
                  </a>
                </Names>
              </Back>
              <Design>
                <Fild>Designer</Fild>
                <Names>
                  <a href="https://github.com/waterbeen0530">
                    <Name>임수빈</Name>
                  </a>
                </Names>
              </Design>
            </Text>
          </Cover>
          <Route>
            <a href="https://www.facebook.com/DSMSinabro">
              <Facebook src={facebook} />
            </a>
            <a href="https://github.com/DSM-ROC">
              <Github src={github} />
            </a>
          </Route>
        </Wrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.mainBlueColor};
`;

const Wrapper = styled.div`
  width: 80vw;
  height: 240px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom: 1px solid #fff;
`;

const Cover = styled.div``;

const ProjectLogo = styled.img`
  width: 100px;
  margin-bottom: 34px;
`;

const Text = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  color: ${theme.whiteContentColor};
`;

const Member = styled.div`
  width: 500px;
  margin-bottom: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Front = styled(Member)``;

const Back = styled(Member)``;

const Design = styled(Member)``;

const Fild = styled.h3``;

const Names = styled.div`
  width: 64%;
  gap: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Name = styled.p`
  font-weight: 600;
  white-space: nowrap;
`;

const Route = styled.div`
  margin-bottom: 28px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 26px;
`;

const routeLogo = styled.img`
  width: 50px;
  padding: 8px;
  border-radius: 50%;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 35px;
  cursor: pointer;
`;

const Facebook = styled(routeLogo)`
  background-image: url(${facebook});
`;

const Github = styled(routeLogo)`
  background-image: url(${github});
`;
