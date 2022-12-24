import { selectorFamily } from 'recoil';
import { challengeInfoType } from 'utils/interface/challenge/challenge';
import { challengeSortKey } from 'utils/interface/challengeSortKey/challengeSortKey';
import { challengeListRecoil } from '../challengeList';

export const sortedChallenge = selectorFamily<
  challengeInfoType[],
  challengeSortKey
>({
  key: 'userSelector',
  get:
    (sortKey: challengeSortKey) =>
    ({ get }) => {
      const challengeList: challengeInfoType[] = [...get(challengeListRecoil)];

      if (sortKey === 'new') {
        return challengeList.sort((a, b) => b.id - a.id);
      } else {
        return challengeList.sort((a, b) => b.joinMember - a.joinMember);
      }
    },
});
