export interface commentDataType {
  id: number;
  text: string;
  createdAt: Date;
  updatedAt: Date;
  user: {
    nickname: string;
  };
  challenge: {
    name: string;
  };
}
