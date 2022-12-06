import styled from 'styled-components';
import Banner from 'components/main/banner';
import Search from 'components/main/search';
import Recent from 'components/main/recent';
import Popular from 'components/main/popular';

const Main = (): JSX.Element => {
  return (
    <Container>
      <Banner />
      <Search />
      <Recent />
      <Popular />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100vw;
  margin-bottom: 180px;
`;
