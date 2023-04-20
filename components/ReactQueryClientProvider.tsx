'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

interface ReactQueryProps {
  children: React.ReactNode;
}

export default function ReactQueryClientProvider({ children }: ReactQueryProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
