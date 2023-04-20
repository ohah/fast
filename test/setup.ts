/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { expect } from 'vitest';

import { QueryCache, QueryClient } from '@tanstack/react-query';
import matchers from '@testing-library/jest-dom/matchers';

import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

expect.extend(matchers);

const queryCache = new QueryCache();
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
  logger: {
    log: console.log,
    warn: console.warn,
    error: () => null,
  },
});

afterEach(() => {
  queryCache.clear();
  queryClient.resetQueries();
});
