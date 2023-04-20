'use client';

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useEffect, useRef, useState } from 'react';
import { Reaction } from 'store/atoms';
import { useFilter } from 'store/filter_hooks';

export default function SelectListCheckBox() {
  const [open, setOpen] = useState(false);
  const { toggleCheck, allCheck, getValue, getAllValue } = useFilter();

  const filterRef = useRef<HTMLDivElement>(null);

  const closeEvent = (e: MouseEvent) => {
    if (!filterRef.current?.contains(e.target as never)) setOpen(false);
  };

  useEffect(() => {
    document.body.addEventListener('click', closeEvent);
    return () => {
      document.body.removeEventListener('click', closeEvent);
    };
  });

  return (
    <div ref={filterRef} className="flex items-center cursor-pointer relative">
      <button type="button" className="h-full w-full p-4" onClick={() => setOpen(!open)}>
        <ChevronDownIcon className="w-5 h-5 p-1" />
      </button>
      {open && (
        <ul className="absolute top-14 left-0 bg-white w-40 border flex-col gap-y-4 divide-y z-50">
          <li>
            <label htmlFor="all" className="flex cursor-pointer hover:bg-gray-100 gap-x-2 px-2 py-1">
              <input id="all" type="checkbox" onChange={() => allCheck()} checked={getAllValue()} />
              전체
            </label>
          </li>
          {Object.values(Reaction).map(key => {
            return (
              <li key={key}>
                <label htmlFor={key} className="flex cursor-pointer hover:bg-gray-100 gap-x-2 px-2 py-1">
                  <input id={key} type="checkbox" onChange={() => toggleCheck(key)} checked={getValue(key)} />
                  <span>{key}</span>
                </label>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
