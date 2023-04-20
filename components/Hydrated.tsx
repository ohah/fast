import { dehydrate, FetchQueryOptions, Hydrate as ReactHydrate } from '@tanstack/react-query';
import getQueryClient from 'app/getQueryClient';

interface HydratedProps {
  options: FetchQueryOptions;
  children: React.ReactNode;
}

export default async function Hydrated({ options, children }: HydratedProps) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(options);
  const dehydratedState = dehydrate(queryClient);

  return <ReactHydrate state={dehydratedState}>{children}</ReactHydrate>;
}
