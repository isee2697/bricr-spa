import React, { useState, useEffect } from 'react';

import { Search as BaseSearch } from 'ui/molecules';
import { useOverlayDispatch } from 'hooks/useOverlayDispatch/useOverlayDispatch';

import { AdvancedSearchResult, FormattedAdvancedSearchResult, SearchProps } from './Search.types';

export const Search = ({ results, onSearch }: SearchProps) => {
  const [hasFocus, setFocus] = useState(false);
  const setOverlay = useOverlayDispatch();

  useEffect(() => {
    setOverlay(hasFocus);
  }, [hasFocus, setOverlay]);

  const getFormattedResults = (result?: AdvancedSearchResult): FormattedAdvancedSearchResult[] => {
    const formattedResults: FormattedAdvancedSearchResult[] = [
      ...(result?.emails || []).map(email => ({
        title: email.email,
        type: 'Email',
      })),
      ...(result?.users || []).map(user => ({
        title: `${user.firstName} ${user.lastName}`,
        type: 'Contact',
      })),
      ...(result?.crms || []).map(crm => ({
        title: crm.addresses
          ? `${crm.addresses[0].street || ''} ${crm.addresses[0].houseNumber || ''}, ${crm.addresses[0].city || ''} `
          : '',
        type: 'Property',
      })),
    ];

    return formattedResults;
  };

  return (
    <BaseSearch
      hasFocus={hasFocus}
      setFocus={setFocus}
      onChangeCapture={(e: React.ChangeEvent<HTMLInputElement>) => onSearch(e.target.value)}
      options={getFormattedResults(results)}
    />
  );
};
