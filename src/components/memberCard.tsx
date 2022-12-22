import styled from 'styled-components';
import trashcan from '../assets/img/challenger/trashcan.png';
interface MemberCardProps {
  profile: string;
  rank: string;
  name: string;
  deleteMember?: boolean;
}

const MemberCard = ({ profile, rank, name, deleteMember }: MemberCardProps) => {
  return (
    <Wrapper>
      <ProfileWrapper>
        <img src={profile} alt="profile" />
        <b>{rank}</b>
        &nbsp;
        <span>{name}</span>
      </ProfileWrapper>
      {deleteMember && <img src={trashcan} alt="deleteMember" />}
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
