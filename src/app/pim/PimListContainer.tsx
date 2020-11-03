import React, { useState } from 'react';

import { ListPimsFilters, PropertyType, useListPimsCountQuery, useListPimsQuery } from 'api/types';
import { usePagination } from 'hooks';
import { PerPageType } from 'ui/atoms/pagination/Pagination.types';
import { usePimsSorting } from '../shared/usePimsSorting/usePimsSorting';
import { usePimQueryParams } from 'app/shared/usePimQueryParams/usePimQueryParams';

import { PimList } from './PimList';

const EMPTY_LIST = { listPims: { items: [] } };
const PER_PAGE_OPTIONS: PerPageType[] = [10, 25, 'All'];

const getPimFilterVariables = (type: string): ListPimsFilters => {
  switch (type) {
    case 'residential':
      return {
        propertyTypes: [PropertyType.Apartment, PropertyType.House],
      };
    case 'bog':
      return { propertyTypes: [PropertyType.Commercial] };
    case 'aog':
      return { propertyTypes: [PropertyType.Agricultural] };
    case 'parkinglot':
      return { propertyTypes: [PropertyType.ParkingLot] };
    case 'plot':
      return { propertyTypes: [PropertyType.BuildingPlot] };
    default:
      return {};
  }
};

export const PimListContainer = () => {
  const { status, setStatus, priceTypeFilter } = usePimQueryParams({});

  const [activeFilters, setActiveFilters] = useState(getPimFilterVariables('residential'));

  const { loading: isCountLoading, data: countData } = useListPimsCountQuery({
    variables: {
      ...priceTypeFilter,
      ...activeFilters,
    },
  });

  const amounts =
    (countData && {
      actionRequired: 0,
      active: countData.activeCount.metadata?.total || 0,
      archived: countData.archivedCount.metadata?.total || 0,
    }) ??
    undefined;

  const { sorting, query: sortQuery } = usePimsSorting();

  const { pagination, query: paginationQuery } = usePagination({
    prefix: status,
    itemsCount: amounts ? amounts[status] : 0,
    perPageOptions: PER_PAGE_OPTIONS,
  });

  const { loading: isListLoading, data: listData } = useListPimsQuery({
    variables: {
      ...priceTypeFilter,
      ...activeFilters,
      archived: status === 'archived',
      ...sortQuery,
      ...paginationQuery,
    },
    fetchPolicy: 'no-cache',
  });

  const handleFilterChange = (filters: ListPimsFilters) => {
    setActiveFilters(filters);
  };

  return (
    <PimList
      status={status}
      onStatusChange={setStatus}
      type={'residential'}
      onFilter={handleFilterChange}
      activeFilters={activeFilters}
      isLoading={isCountLoading || isListLoading}
      amounts={amounts}
      listData={status === 'actionRequired' ? EMPTY_LIST : listData}
      sorting={sorting}
      pagination={pagination}
    />
  );
};
