import { selectorFamily } from 'recoil';
import { challengeInfoType } from 'utils/interface/challenge/challenge';
import { challengeListRecoil } from '../challengeList';

export const challengeListSlicer = selectorFamily<challengeInfoType[], number>({
  key: 'userSelector',
  get:
    (len: number) =>
    ({ get }) =>
      get(challengeListRecoil).slice(0, len),
});
