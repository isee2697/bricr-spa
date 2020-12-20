import React, { useState, useEffect } from 'react';

import { Search as BaseSearch } from 'ui/molecules';
import { useOverlayDispatch } from 'hooks/useOverlayDispatch/useOverlayDispatch';
import { AdvancedSearchResult } from 'api/types';

import { FormattedAdvancedSearchResult, SearchProps } from './Search.types';

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
        title: `${crm.firstName || ''} ${crm.insertion || ''} ${crm.lastName}`,
        type: 'Property',
      })),
      ...(result?.pims || []).map(pim => ({
        title: `${pim.street || ''} ${pim.houseNumber || ''}, ${pim.city}`,
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
