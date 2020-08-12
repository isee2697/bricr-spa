import React from 'react';
import { useQueryParam } from 'use-query-params';

import { ListPimsFilters, PricingType, PropertyType, useListPimsCountQuery, useListPimsQuery } from 'api/types';
import { usePagination } from 'hooks';
import { PerPageType } from 'ui/atoms/pagination/Pagination.types';
import { ActionTabStatus } from 'ui/molecules/actionTabs/ActionTabs.types';
import { usePimsSorting } from '../shared/usePimsSorting/usePimsSorting';

import { Pim } from './Pim';

const EMPTY_LIST = { listPims: { items: [] } };
const PER_PAGE_OPTIONS: PerPageType[] = [10, 25, 'All'];

const getPimFilterVariables = (type: string): ListPimsFilters => {
  switch (type) {
    case 'rent':
    case 'sale':
      return {
        pricingType: type === 'sale' ? PricingType.Sale : PricingType.Rent,
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
  const [status = 'active', setStatus] = useQueryParam<ActionTabStatus>('status');
  const [type = 'sale', setType] = useQueryParam<string>('type');

  const { loading: isCountLoading, error: countError, data: countData } = useListPimsCountQuery({});

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

  const { loading: isListLoading, error: listError, data: listData } = useListPimsQuery({
    variables: {
      ...getPimFilterVariables(type),
      archived: status === 'archived',
      ...sortQuery,
      ...paginationQuery,
    },
    fetchPolicy: 'no-cache',
  });

  return (
    <Pim
      status={status}
      onStatusChange={setStatus}
      type={type}
      onTypeChange={setType}
      isLoading={isCountLoading || isListLoading}
      isError={!!countError || !!listError}
      amounts={amounts}
      listData={status === 'actionRequired' ? EMPTY_LIST : listData}
      sorting={sorting}
      pagination={pagination}
    />
  );
};
