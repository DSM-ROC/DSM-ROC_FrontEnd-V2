import styled from 'styled-components';

interface MemberCardProps {
  pfp?: string;
  rank: string;
  name: string;
  img: string;
  deleteMember?: boolean;
}

const MemberCard = ({
  pfp,
  rank,
  name,
  img,
  deleteMember,
}: MemberCardProps) => {
  return (
    <Wrapper>
      <ProfileWrapper>
        <img src={pfp} alt="profile" />
        <b>{rank}</b>
        <span>{name}</span>
      </ProfileWrapper>
      {deleteMember && <img src={img} alt="deleteMember" />}
    </Wrapper>
  );
};

export default MemberCard;

const Wrapper = styled.div`
  width: 992px;
  height: 120px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  > img {
    width: 25px;
    height: 25px;

    margin-right: 45px;
  }
`;

const ProfileWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;

  > img {
    width: 60px;
    height: 60px;

    margin: 0 20px 0 47px;

    object-fit: cover;
  }
`;
