'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { SelectListCheckBox } from 'components';
import { useFilter } from 'store/filter_hooks';

export default function SearchBar() {
  const { setFilter } = useFilter();

  return (
    <form className="w-full flex border border-lg-t max-w-screen-lg" onSubmit={e => e.preventDefault()}>
      <SelectListCheckBox />
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
        </div>
        <input
          type="search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none"
          placeholder="검색어를 입력하세요"
          required
          onChange={e => {
            setFilter(filter => {
              const newFilter = JSON.parse(JSON.stringify(filter));
              return {
                ...newFilter,
                title: e.currentTarget.value,
              };
            });
          }}
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          검색
        </button>
      </div>
    </form>
  );
}
