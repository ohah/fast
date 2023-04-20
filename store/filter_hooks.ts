'use client';

import { useRecoilState } from 'recoil';
import { Reaction, filterState } from './atoms';

type ReactionType = (typeof Reaction)[keyof typeof Reaction];

export const useFilter = () => {
  const [filter, setFilter] = useRecoilState(filterState);

  const toggleCheck = (check: ReactionType) => {
    setFilter(filter => {
      return {
        ...filter,
        reactions: {
          ...filter.reactions,
          [check]: !filter.reactions[check],
        },
      };
    });
  };

  const getAllValue = () => {
    return Object.values(Reaction).every(key => filter.reactions[key] === true);
  };

  const getValue = (check: ReactionType): boolean => {
    return filter.reactions[check];
  };

  const allCheck = () => {
    setFilter(filter => {
      const alltrueCheck = Object.values(Reaction).every(key => filter.reactions[key] === true);
      const newFilter = JSON.parse(JSON.stringify(filter));
      if (alltrueCheck) {
        Object.values(Reaction).forEach(key => {
          newFilter.reactions[key] = false;
        });
      } else {
        Object.values(Reaction).forEach(key => {
          newFilter.reactions[key] = true;
        });
      }
      return newFilter;
    });
  };

  return {
    filter,
    getValue,
    getAllValue,
    setFilter,
    toggleCheck,
    allCheck,
  };
};
