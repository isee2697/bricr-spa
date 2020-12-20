import React from 'react';

import { useAdvancedSearchLazyQuery } from 'api/types';

import { Search } from './Search';

export const SearchContainer = () => {
  const [advancedSearch, { data }] = useAdvancedSearchLazyQuery({
    fetchPolicy: 'no-cache',
  });

  const handleSearch = async (keyword: string) => {
    advancedSearch({
      variables: {
        input: {
          keyword,
        },
      },
    });
  };

  return (
    <Search
      results={data?.advancedSearch || { users: [], crms: [], pims: [], emails: [], teams: [] }}
      onSearch={handleSearch}
    />
  );
};
