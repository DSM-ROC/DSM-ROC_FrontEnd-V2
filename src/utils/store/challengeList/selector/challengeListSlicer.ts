import { selectorFamily } from 'recoil';
import { challengeInfoType } from 'utils/interface/challenge/challenge';
import { challengeListRecoil } from '../challengeList';

export const challengeListSlicer = selectorFamily<challengeInfoType[], number>({
  key: 'userSelector',
  get:
    (len: number) =>
    ({ get }) => {
      const temp = [...get(challengeListRecoil)];
      return temp
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
        .slice(0, len);
    },
});
