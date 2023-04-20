'use client';

import { issues } from 'app/api/mocks/issues/route';
import { Tooltip } from 'components';

type UserProps = (typeof issues)[0]['user'] & {
  className: string;
};

export default function User({ avatar_url, html_url, className, login }: UserProps) {
  return (
    <Tooltip arrow position="bottom">
      <a href={html_url} target="_blank" className="flex gap-x-1 w">
        <img src={avatar_url} className={className ? className : 'w-10 h-10 rounded-full'} />
        <span>{login}</span>
        <Tooltip.Text>Github로 이동</Tooltip.Text>
      </a>
    </Tooltip>
  );
}
