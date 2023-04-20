import { useQuery } from '@tanstack/react-query';
import { IssuesRespsone } from 'app/api/mocks/issues/route';
import axios from 'axios';

export const ISSUES_KEY = ['issues'];

export const getIssues = () => {
  const api =
    process.env.NEXT_PUBLIC_API_MOCKING === 'true'
      ? '/api/mocks/issues'
      : 'https://api.github.com/repos/facebook/create-react-app/issues';
  return axios.get<IssuesRespsone>(api).then(({ data }) => data);
};

export const useIssues = () => {
  return useQuery<IssuesRespsone>({
    queryKey: ISSUES_KEY,
    queryFn: () => getIssues(),
    select: data => data.sort((a, b) => (a.comments > b.comments ? -1 : 1)),
  });
};
