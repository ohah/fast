import { ISSUES_KEY, getIssues } from 'store/hooks';
import Hydrated from 'components/Hydrated';
import { Lists } from 'components/Lists';
import { SearchBar } from 'components';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-10 px-24 pb-10 bg-gray-100">
      <SearchBar />
      {/* @ts-expect-error Server Component */}
      <Hydrated
        options={{
          queryKey: ISSUES_KEY,
          queryFn: () => getIssues(),
        }}
      >
        <Lists />
      </Hydrated>
    </main>
  );
}
