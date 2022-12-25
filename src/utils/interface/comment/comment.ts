export interface commentDataType {
  id: number;
  text: string;
  createdAt: Date;
  updatedAt: Date;
  user: {
    id: number;
    nickname: string;
  };
  challenge: {
    name: string;
  };
}
