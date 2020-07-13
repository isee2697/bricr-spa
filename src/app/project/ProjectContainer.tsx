import React from 'react';
import { useQueryParam } from 'use-query-params';

import { PerPageType } from 'ui/atoms/pagination/Pagination.types';
import { usePimsSorting } from '../pim/usePimsSorting/usePimsSorting';
import { usePagination } from 'hooks';
import { ActionTabStatus } from 'ui/molecules/actionTabs/ActionTabs.types';
import { ListNcp, useListNcpsCountQuery, useListNcpsQuery } from 'api/types';

import { Project } from './Project';

const PER_PAGE_OPTIONS: PerPageType[] = [10, 25, 'All'];

export const ProjectContainer = () => {
  const [status = 'active', setStatus] = useQueryParam<ActionTabStatus>('status');
  const [type = 'nc_sale', setType] = useQueryParam<string>('type');

  const { loading: isCountLoading, error: countError, data: countData } = useListNcpsCountQuery({});

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

  const { loading: isListLoading, error: listError, data: listData } = useListNcpsQuery({
    variables: { archived: status === 'archived', ...sortQuery, ...paginationQuery },
    fetchPolicy: 'no-cache',
  });

  return (
    <Project
      status={status}
      onStatusChange={setStatus}
      type={type}
      onTypeChange={setType}
      isLoading={isCountLoading || isListLoading}
      isError={!!countError || !!listError}
      amounts={amounts}
      listData={status === 'actionRequired' ? ([] as ListNcp[]) : listData?.listNcps.items ?? []}
      sorting={sorting}
      pagination={pagination}
    />
  );
};
