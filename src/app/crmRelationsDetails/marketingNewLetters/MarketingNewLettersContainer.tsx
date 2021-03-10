import React, { useState } from 'react';

import { MARKETING_NEWSLETTERS as mockData } from 'api/mocks/marketing-newsletter';
import { useCrmMarketingNewsLetterSorting } from 'app/shared/useCrmMarketingNewsLetterSorting/useCrmMarketingNewsLetterSorting';
import { PerPageType } from 'ui/atoms/pagination/Pagination.types';
import { usePagination } from 'hooks';

import { MarketingNewLetter } from './MarketingNewLetter';
import { ListMarketingNewsLetterEventFilters, MarketingNewLetterContainerProps } from './MarketingNewLetter.types';

const PER_PAGE_OPTIONS: PerPageType[] = [10, 25, 'All'];

export const MarketingNewLetterContainer = (props: MarketingNewLetterContainerProps) => {
  const { sorting, query: sortQuery } = useCrmMarketingNewsLetterSorting();
  const { pagination } = usePagination({
    itemsCount: 15,
    perPageOptions: PER_PAGE_OPTIONS,
  });
  const [activeFilters, setActiveFilters] = useState<ListMarketingNewsLetterEventFilters>({});
  const [selected, setSelected] = useState<string[]>([]);

  const handleFilterChange = (filters: ListMarketingNewsLetterEventFilters) => {
    setActiveFilters(filters);
  };

  const handleSelectItems = (items: string[]) => {
    setSelected(items);
  };

  return (
    <MarketingNewLetter
      {...props}
      sortColumn={sortQuery.sortColumn}
      items={mockData}
      onFilter={handleFilterChange}
      activeFilters={activeFilters}
      sorting={sorting}
      pagination={pagination}
      onSelectItems={handleSelectItems}
      selectedItems={selected}
    />
  );
};
