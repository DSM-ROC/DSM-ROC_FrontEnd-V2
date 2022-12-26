import { atom, RecoilState } from 'recoil';
import { boardType } from 'utils/interface/board';

const boardListDefaultObj: boardType[] = [];

export const boardListRecoil: RecoilState<boardType[]> = atom({
  key: 'boardListRecoil',
  default: boardListDefaultObj,
});
