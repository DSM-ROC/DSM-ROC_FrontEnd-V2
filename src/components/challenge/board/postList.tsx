import styled from 'styled-components';
import Post from './post';

const PostList = () => {
  return (
    <PostListSection>
      {[1, 2, 3, 4].map((postData, i) => (
        <Post key={i} />
      ))}
    </PostListSection>
  );
};

const PostListSection = styled.div`
  width: 100%;
  display: flex;

  flex-direction: column;
  gap: 50px;
  margin-top: 120px;
`;

export default PostList;
