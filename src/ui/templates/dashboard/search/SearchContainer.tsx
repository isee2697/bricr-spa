import React from 'react';

import { useSearchLazyQuery } from 'api/types';

import { Search } from './Search';

export const SearchContainer = () => {
  const [search, { data, loading }] = useSearchLazyQuery({
    fetchPolicy: 'no-cache',
  });

  const handleSearch = async (keyword: string) => {
    search({
      variables: {
        input: {
          keyword,
        },
      },
    });
  };

  return (
    <Search
      results={data?.search || { users: [], crms: [], pims: [], emails: [], teams: [] }}
      onSearch={handleSearch}
      loading={loading}
    />
  );
};
