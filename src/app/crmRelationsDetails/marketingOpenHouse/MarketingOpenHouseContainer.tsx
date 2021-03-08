import React, { useState } from 'react';

import { useMarketingOpenHouseSorting } from 'app/shared/useMarketingOpenHouseSorting/useMarketingOpenHouseSorting';
import { usePagination } from 'hooks';
import { PerPageType } from 'ui/atoms/pagination/Pagination.types';
import { MARKETING_OPEN_HOUSES as mockData } from 'api/mocks/marketing-open-house';

import { MarketingOpenHouse } from './MarketingOpenHouse';
import {
  ListOpenHouseFilters,
  MarketingOpenHouseContainerProps,
  MarketingOpenHouseItem,
  MarketingOpenHouseVisitStatus,
  YesNo,
} from './MarketingOpenHouse.types';

const PER_PAGE_OPTIONS: PerPageType[] = [10, 25, 'All'];

export const MarketingOpenHouseContainer = (props: MarketingOpenHouseContainerProps) => {
  const [activeFilters, setActiveFilters] = useState<ListOpenHouseFilters>({});
  const [status, setStatus] = useState<MarketingOpenHouseVisitStatus>(MarketingOpenHouseVisitStatus.Visited);
  const { pagination } = usePagination({
    itemsCount: 0,
    perPageOptions: PER_PAGE_OPTIONS,
  });
  const { sorting, query: sortQuery } = useMarketingOpenHouseSorting();

  const handleBulk = async (items: MarketingOpenHouseItem[], formData: unknown) => {
    return undefined;
  };

  return (
    <MarketingOpenHouse
      {...props}
      sortColumn={sortQuery.sortColumn}
      sorting={sorting}
      items={mockData.filter(item => item.visitStatus === status)}
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
