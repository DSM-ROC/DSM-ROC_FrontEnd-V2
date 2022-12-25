import Post from 'components/challenge/board/post';
import ButtonBox from 'components/challenge/board/buttonBox';
import TitleBox from 'components/challenge/board/titleBox';

const Board = (): JSX.Element => {
  return (
    <>
      <TitleBox />
      <ButtonBox />
      <Post />
    </>
  );
};

export default Board;
