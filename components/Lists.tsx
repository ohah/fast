'use client';

import React, { useMemo } from 'react';
import { useIssues } from 'store/hooks';
import { Card } from 'components';
import { useFilter } from 'store/filter_hooks';
import { Ifilter, Reaction } from 'store/atoms';
import { IssuesRespsone } from 'app/api/mocks/issues/route';

export const searchData = ({ data, filter }: { data?: IssuesRespsone; filter: Ifilter }) => {
  const filter_array = Object.values(Reaction).filter(value => {
    if (filter.reactions[value]) return true;
    return false;
  });

  return data
    ?.filter(item => {
      if (Object.values(Reaction).length === filter_array.length) return true;
      return filter_array.some(arr => item.reactions[arr as never] > 0);
    })
    .filter(item => {
      if (filter.title === '') {
        return true;
      } else {
        return filter.title && item.title.indexOf(filter.title) !== -1;
      }
    });
};

export const Lists = () => {
  const { data, isError } = useIssues();
  const { filter } = useFilter();
  const filter_data = useMemo(() => searchData({ data, filter }), [data, filter]);

  return (
    <ul className="bg-white shadow rounded divide-y max-w-screen-lg w-full">
      {isError && (
        <div className="bg-white p-5 text-lg font-bold rounded border shadow-lg">
          데이터를 불러오는데 실패하였습니다
        </div>
      )}
      {filter_data?.map(item => {
        return <Card key={item.id} data={item} />;
      })}
    </ul>
  );
};

export default Lists;
