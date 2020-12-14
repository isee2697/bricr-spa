import React, { useState } from 'react';

import { useAuthState } from 'hooks';

import { Search } from './Search';
import { AdvancedSearchResult } from './Search.types';

export const SearchContainer = () => {
  const { accessToken } = useAuthState();
  const [searchResult, setSearchResult] = useState<AdvancedSearchResult>();

  const handleSearch = async (keyword: string) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_FILE_URL}/advanced-search?keyword=${keyword}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + accessToken,
        },
      });

      if (response.ok) {
        const result = await response.json();
        setSearchResult(result);
      }

      return undefined;
    } catch (error) {
      return error;
    }
  };

  return <Search results={searchResult} onSearch={handleSearch} />;
};
