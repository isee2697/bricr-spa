import React, { useState } from 'react';

import { useListPimsCountQuery, useListPimsQuery } from 'api/types';
import { usePagination } from 'hooks';
import { PerPageType } from 'ui/atoms/pagination/Pagination.types';

import { PimTabsStatus } from './pimTabs/PimTabs.types';
import { usePimsSorting } from './usePimsSorting/usePimsSorting';
import { Pim } from './Pim';

const EMPTY_LIST = { listPims: { items: [] } };
const PER_PAGE_OPTIONS: PerPageType[] = [10, 25, 'All'];

export const PimContainer = () => {
  const [status, setStatus] = useState<PimTabsStatus>('active');
  const [type, setType] = useState('sale');

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
    itemsCount: amounts ? amounts[status] : 0,
    perPageOptions: PER_PAGE_OPTIONS,
  });

  const { loading: isListLoading, error: listError, data: listData } = useListPimsQuery({
    variables: { archived: status === 'archived', ...sortQuery, ...paginationQuery },
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
