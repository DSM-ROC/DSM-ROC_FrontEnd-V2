import styled from 'styled-components';
import Banner from 'components/main/banner';
import Search from 'components/main/search';
import Recent from 'components/main/recent';

const Main = (): JSX.Element => {
  return (
    <Container>
      <Banner />
      <Search />
      <Recent />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100%;
  margin-bottom: 180px;
`;
