import React, { useState } from 'react';

import { useMarketingOpenHouseOrganizedSorting } from 'app/shared/useMarketingOpenHouseOrganizedSorting/useMarketingOpenHouseOrganizedSorting';
import { usePagination } from 'hooks';
import { YesNo } from '../marketingOpenHouse/MarketingOpenHouse.types';
import { PerPageType } from 'ui/atoms/pagination/Pagination.types';
import { MARKETING_OPEN_HOUSE_ORGANIZED_ITEMS as mockData } from 'api/mocks/marketing-open-house';

import { MarketingOpenHouseOrganized } from './MarketingOpenHouseOrganized';
import {
  ListOpenHouseOrganizedFilters,
  MarketingOpenHouseOrganizedContainerProps,
  MarketingOpenHouseOrganizedItem,
  MarketingOpenHouseOrganizedStatus,
} from './MarketingOpenHouseOrganized.types';

const PER_PAGE_OPTIONS: PerPageType[] = [10, 25, 'All'];

export const MarketingOpenHouseOrganizedContainer = (props: MarketingOpenHouseOrganizedContainerProps) => {
  const [activeFilters, setActiveFilters] = useState<ListOpenHouseOrganizedFilters>({});
  const [status, setStatus] = useState<MarketingOpenHouseOrganizedStatus>(MarketingOpenHouseOrganizedStatus.Checked);
  const { pagination } = usePagination({
    itemsCount: 0,
    perPageOptions: PER_PAGE_OPTIONS,
  });
  const { sorting, query: sortQuery } = useMarketingOpenHouseOrganizedSorting();

  const handleBulk = async (items: MarketingOpenHouseOrganizedItem[], formData: unknown) => {
    return undefined;
  };

  return (
    <MarketingOpenHouseOrganized
      {...props}
      items={mockData}
      sortColumn={sortQuery.sortColumn}
      sorting={sorting}
      activeFilters={activeFilters}
      onFilter={setActiveFilters}
      status={status}
      onStatusChange={setStatus}
      pagination={pagination}
      bulkData={{
        resultValues: [YesNo.Yes, YesNo.No],
      }}
      onBulkOpen={() => {}}
      onBulk={handleBulk}
    />
  );
};
