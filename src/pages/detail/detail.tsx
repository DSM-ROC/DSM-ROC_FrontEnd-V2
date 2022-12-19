import Content from 'components/detail/content';
import Title from 'components/detail/title';
import styled from 'styled-components';

const Detail = (): JSX.Element => {
  return (
    <Container>
      <Title />
      <Content />
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
