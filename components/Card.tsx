'use client';

import { issues } from 'app/api/mocks/issues/route';
import { ChatBubbleLeftIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import { Tooltip, Labels, User, Reactions } from 'components';
import { Reaction } from 'store/atoms';

interface CardItem {
  data: (typeof issues)[0];
}

const dateFormat = (_date: string) => {
  const date = new Date(_date);
  const dateFormat = [
    date.getFullYear(),
    date.getMonth().toString().padStart(2, '0'),
    date.getDay().toString().padStart(2, '0'),
  ];
  const timeFormat = [
    date.getHours().toString().padStart(2, '0'),
    date.getMinutes().toString().padStart(2, '0'),
    date.getSeconds().toString().padStart(2, '0'),
  ];

  return dateFormat.join('-') + ' ' + timeFormat.join(':');
};

export default function Card(props: CardItem) {
  const { number, title, created_at, comments, labels, state, user, reactions, id, html_url } = props.data;
  return (
    <li className="p-2 flex flex-col">
      <div className="flex flex-col gap-y-2">
        <div className="flex gap-x-2 flex-wrap items-center">
          <div
            className={`${
              state === 'open' ? 'border-green-500' : 'border-gray-500'
            } border-[0.1rem] border-separate w-4 h-4 rounded-full inline-flex items-center justify-center`}
          >
            <div className={`w-1 h-1 rounded-full ${state === 'open' ? 'bg-green-500' : 'bg-gray-500'}`} />
          </div>
          <a href={html_url} target="_blank">
            <span className="hover:text-gray-300 duration-200 transition transform">{title}</span>
          </a>
          {labels.map(item => (
            <Labels key={item.id} {...item} />
          ))}
        </div>
        <div className="text-gray-800 text-sm flex gap-x-2 items-center">
          <Tooltip arrow className="inline-flex items-center">
            <ChatBubbleLeftIcon className="w-8 h-8 p-2 -ml-2" />
            <span>{comments}</span>
            <Tooltip.Text> 댓글 </Tooltip.Text>
          </Tooltip>
          <span>#{number}</span>
          <User className="w-5 h-5 rounded-full" {...user} />
          <Tooltip arrow className="inline-flex items-center">
            <CalendarDaysIcon className="w-8 h-8 p-2" />
            <span>{dateFormat(created_at)}</span>
            <Tooltip.Text>작성일자</Tooltip.Text>
          </Tooltip>
          <div className="flex gap-x-2">
            {Object.values(Reaction).map(key => {
              if (reactions[key as never] > 0) {
                return (
                  <Tooltip key={`${id}-${key}`} className="flex items-center gap-x-1" arrow>
                    <Reactions type={key} className="w-5 h-5" />
                    {reactions[key as never]}
                    <Tooltip.Text>{key}</Tooltip.Text>
                  </Tooltip>
                );
              }
            })}
          </div>
        </div>
      </div>

      <div className="flex items-center"></div>
    </li>
  );
}
