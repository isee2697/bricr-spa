import React, { useState } from 'react';

import { usePagination } from 'hooks';
import { PerPageType } from 'ui/atoms/pagination/Pagination.types';
import { MARKETING_SURVEYS as mockData } from 'api/mocks/marketingSurvey';
import { useMarketingSurveySorting } from 'app/shared/useMarketingSurveySorting/useMarketingSurveySorting';

import { MarketingSurvey } from './MarketingSurvey';
import { MarketingSurveyContainerProps, ListSurveyFilters, SurveyStatus } from './MarketingSurvey.types';

const PER_PAGE_OPTIONS: PerPageType[] = [10, 25, 'All'];

export const MarketingSurveyContainer = (props: MarketingSurveyContainerProps) => {
  const [activeFilters, setActiveFilters] = useState<ListSurveyFilters>({});
  const [status, setStatus] = useState<SurveyStatus>(SurveyStatus.Complete);
  const { pagination } = usePagination({
    itemsCount: 0,
    perPageOptions: PER_PAGE_OPTIONS,
  });
  const { sorting, query: sortQuery } = useMarketingSurveySorting();

  return (
    <MarketingSurvey
      {...props}
      sortColumn={sortQuery?.sortColumn}
      sorting={sorting}
      items={mockData}
      activeFilters={activeFilters}
      onFilter={setActiveFilters}
      status={status}
      onStatusChange={setStatus}
      pagination={pagination}
    />
  );
};
