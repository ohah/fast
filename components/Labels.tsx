'use client';

import { issues } from 'app/api/mocks/issues/route';
import { Tooltip } from 'components';

type LabelProps = (typeof issues)[0]['labels'][0];

export default function Label(props: LabelProps) {
  const { color, description, name } = props;
  return (
    <Tooltip arrow>
      <div className="inline-flex text-xs">
        <div className={`rounded-lg px-1 py-1 text-gray-200`} style={{ backgroundColor: `#${color}` }}>
          {name}
        </div>
      </div>
      {description && <Tooltip.Text>{description}</Tooltip.Text>}
    </Tooltip>
  );
}
