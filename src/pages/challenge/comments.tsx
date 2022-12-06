import { useSearchParams } from 'react-router-dom';

const Comments = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  const date = searchParams.get('date');
  console.log(date);

  return (
    <>
      <h1>Comments</h1>
    </>
  );
};

export default Comments;
