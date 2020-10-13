import React, { useEffect, useState } from 'react';

import { ListPimsFilters, PropertyType, useListPimsCountQuery, useListPimsQuery } from 'api/types';
import { usePagination } from 'hooks';
import { PerPageType } from 'ui/atoms/pagination/Pagination.types';
import { usePimsSorting } from '../shared/usePimsSorting/usePimsSorting';
import { usePimQueryParams } from 'app/shared/usePimQueryParams/usePimQueryParams';

import { Pim } from './Pim';

const EMPTY_LIST = { listPims: { items: [] } };
const PER_PAGE_OPTIONS: PerPageType[] = [10, 25, 'All'];

const getPimFilterVariables = (type: string): ListPimsFilters => {
  switch (type) {
    case 'property':
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

export const PimContainer = () => {
  const { status, setStatus, type, setType, pricingType, setPricingType, priceTypeFilter } = usePimQueryParams({});
  const [activeFilters, setActiveFilters] = useState(getPimFilterVariables(type));

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

  useEffect(() => {
    setActiveFilters(getPimFilterVariables(type));
  }, [type]);

  return (
    <Pim
      status={status}
      onStatusChange={setStatus}
      type={type}
      onTypeChange={setType}
      onFilter={handleFilterChange}
      activeFilters={activeFilters}
      pricingType={pricingType}
      onPricingTypeChange={setPricingType}
      isLoading={isCountLoading || isListLoading}
      amounts={amounts}
      listData={status === 'actionRequired' ? EMPTY_LIST : listData}
      sorting={sorting}
      pagination={pagination}
    />
  );
};
