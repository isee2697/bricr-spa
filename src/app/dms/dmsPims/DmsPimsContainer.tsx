import React, { useEffect, useState } from 'react';

import { ListPimsFilters, useListPimsCountQuery, useListPimsQuery } from 'api/types';
import { PimTypes } from 'app/pim/dictionaries';
import { usePagination } from 'hooks';
import { PerPageType } from 'ui/atoms/pagination/Pagination.types';
import { usePimsSorting } from 'app/shared/usePimsSorting/usePimsSorting';

import { DmsPims } from './DmsPims';
import { DmsPimsContainerProps } from './DmsPims.types';

const EMPTY_LIST = { listPims: { items: [] } };
const PER_PAGE_OPTIONS: PerPageType[] = [10, 25, 'All'];

const getPimFilterVariables = (type: string): ListPimsFilters => {
  if (type === 'purchase') {
    return {
      isPurchased: true,
    };
  }

  return { propertyTypes: PimTypes.find(pimType => pimType.name === type)?.types };
};

export const DmsPimsContainer = ({ type: pimType }: DmsPimsContainerProps) => {
  const [activeFilters, setActiveFilters] = useState(getPimFilterVariables(pimType));

  useEffect(() => {
    setActiveFilters(current => ({ ...current, ...getPimFilterVariables(pimType) }));
  }, [pimType, setActiveFilters]);

  const { loading: isCountLoading, data: countData } = useListPimsCountQuery({
    variables: {
      ...activeFilters,
    },
    fetchPolicy: 'no-cache',
  });

  const amounts =
    (countData && {
      actionRequired: 0,
      active: countData.activeCount.metadata?.total || 0,
      archived: countData.archivedCount.metadata?.total || 0,
    }) ??
    undefined;

  const { query: sortQuery } = usePimsSorting();

  const { query: paginationQuery } = usePagination({
    prefix: 'active',
    itemsCount: amounts ? amounts['active'] : 0,
    perPageOptions: PER_PAGE_OPTIONS,
  });

  const { loading: isListLoading, data: listData } = useListPimsQuery({
    variables: {
      ...activeFilters,
      archived: false,
      ...sortQuery,
      ...paginationQuery,
    },
    fetchPolicy: 'no-cache',
  });

  return <DmsPims pims={listData || EMPTY_LIST} type={pimType} isLoading={isCountLoading || isListLoading} />;
};
