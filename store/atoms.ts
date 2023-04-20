import { atom } from 'recoil';

export const Reaction = {
  PLUSONE: '+1',
  MINUSEONE: '-1',
  CONFUSED: 'confused',
  EYES: 'eyes',
  HEART: 'heart',
  HOORAY: 'hooray',
  LAUGT: 'laugt',
  ROCKET: 'rocket',
} as const;

export interface Ifilter {
  title: string;
  reactions: {
    [Reaction.PLUSONE]: boolean;
    [Reaction.MINUSEONE]: boolean;
    [Reaction.CONFUSED]: boolean;
    [Reaction.EYES]: boolean;
    [Reaction.HEART]: boolean;
    [Reaction.HOORAY]: boolean;
    [Reaction.LAUGT]: boolean;
    [Reaction.ROCKET]: boolean;
  };
}

export const initialFilterState: Ifilter = {
  title: '',
  reactions: {
    [Reaction.PLUSONE]: true,
    [Reaction.MINUSEONE]: true,
    [Reaction.CONFUSED]: true,
    [Reaction.EYES]: true,
    [Reaction.HEART]: true,
    [Reaction.HOORAY]: true,
    [Reaction.LAUGT]: true,
    [Reaction.ROCKET]: true,
  },
};

export const filterState = atom<Ifilter>({
  key: 'filter',
  default: initialFilterState,
});
