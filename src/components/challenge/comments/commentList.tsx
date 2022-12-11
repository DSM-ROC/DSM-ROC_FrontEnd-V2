import styled from 'styled-components';
import Commemt from './commemt';

const commentDateList = [
  {
    writerId: 0,
    writer: '배준수',
    created: '2022.11.28',
    content:
      '오늘은 react hook에 대해 공부했다.. 앞으로 변수는 useState로 관리해야지..',
  },
  {
    writerId: 1,
    writer: '배준수',
    created: '2022.11.28',
    content:
      '오늘은 react hook에 대해 공부했다.. 앞으로 변수는 useState로 관리해야지..',
  },
  {
    writerId: 1,
    writer: '배준수',
    created: '2022.11.28',
    content:
      '오늘은 react hook에 대해 공부했다.. 앞으로 변수는 useState로 관리해야지..',
  },
  {
    writerId: 1,
    writer: '배준수',
    created: '2022.11.28',
    content:
      '오늘은 react hook에 대해 공부했다.. 앞으로 변수는 useState로 관리해야지..',
  },
  {
    writerId: 1,
    writer: '배준수',
    created: '2022.11.28',
    content:
      '오늘은 react hook에 대해 공부했다.. 앞으로 변수는 useState로 관리해야지..',
  },
];

const CommentList = (): JSX.Element => {
  return (
    <CommentListContainer>
      {commentDateList.map((commentData, i) => (
        <Commemt key={i} commentData={commentData} />
      ))}
    </CommentListContainer>
  );
};

const CommentListContainer = styled.section`
  width: 100%;
  height: fit-content;

  margin-top: 100px;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export default CommentList;
