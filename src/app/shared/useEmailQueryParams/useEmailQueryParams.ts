import { useQueryParam } from 'use-query-params';

export const useEmailQueryParams = () => {
  const [searchKey, setSearchKey] = useQueryParam('');

  return {
    searchKey,
    setSearchKey,
  };
};
