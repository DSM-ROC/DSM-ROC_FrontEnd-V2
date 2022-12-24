import { atom, RecoilState } from 'recoil';
import { commentDataType } from 'utils/interface/comment/comment';

const commentListDefaultObj: commentDataType[] = [];

export const commentListRecoil: RecoilState<commentDataType[]> = atom({
  key: 'commentListRecoil',
  default: commentListDefaultObj,
});
