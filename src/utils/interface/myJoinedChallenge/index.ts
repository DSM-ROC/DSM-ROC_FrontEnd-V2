export interface myJoinedChallengeType {
  challengeId: number;
  challenge: {
    name: string;
    coverImage: string;
    user: {
      nickname: string;
    };
    joinMember: number;
  };
}
