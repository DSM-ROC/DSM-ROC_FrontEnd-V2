import { atom, RecoilState } from 'recoil';
import { challengeInfoType } from 'utils/interface/challenge/challenge';

const challengeListDefaultObj: challengeInfoType[] = [];

export const challengeListRecoil: RecoilState<challengeInfoType[]> = atom({
  key: 'challengeListRecoil',
  default: challengeListDefaultObj,
});
