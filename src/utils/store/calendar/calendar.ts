import { startOfMonth } from 'date-fns';
import { atom, RecoilState } from 'recoil';

export const calendarRecoil: RecoilState<Date> = atom({
  key: 'calendarRecoil',
  default: startOfMonth(new Date()),
});
