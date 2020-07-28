import React from 'react';
import { useQueryParam } from 'use-query-params';

import { ActionTabStatus } from 'ui/molecules/actionTabs/ActionTabs.types';
import { usePimsSorting } from 'app/pim/usePimsSorting/usePimsSorting';
import { usePagination } from 'hooks';
import { PerPageType } from 'ui/atoms/pagination/Pagination.types';
import { LIST_NCP_1 } from 'api/mocks/ncp-list';
import { ProjectDetailsProps } from 'app/projectDetails/ProjectDetails.types';

import { ObjectTypes } from './ObjectTypes';
import { ListObjectTypes } from './ObjectTypes.types';

const PER_PAGE_OPTIONS: PerPageType[] = [10, 25, 'All'];

const OBJECT_TYPE_DATA: ListObjectTypes = {
  listObjectTypes: [LIST_NCP_1],
};

export const ObjectTypesContainer = ({ onSidebarOpen, isSidebarVisible }: ProjectDetailsProps) => {
  const [status = 'active', setStatus] = useQueryParam<ActionTabStatus>('status');

  const { loading: isCountLoading, error: countError, data: countData } = {
    loading: false,
    error: false,
    data: { activeCount: { metadata: { total: 10 } }, archivedCount: { metadata: { total: 10 } } },
  };

  const amounts =
    (countData && {
      actionRequired: 0,
      active: countData.activeCount.metadata?.total || 0,
      archived: countData.archivedCount.metadata?.total || 0,
    }) ??
    undefined;

  const { sorting } = usePimsSorting();

  const { pagination } = usePagination({
    prefix: status,
    itemsCount: amounts ? amounts[status] : 0,
    perPageOptions: PER_PAGE_OPTIONS,
  });

  const { loading: isListLoading, error: listError, data: listData } = {
    loading: false,
    error: false,
    data: OBJECT_TYPE_DATA,
  };

  return (
    <ObjectTypes
      isSidebarVisible={isSidebarVisible}
      onSidebarOpen={onSidebarOpen}
      status={status}
      onStatusChange={setStatus}
      isLoading={isCountLoading || isListLoading}
      isError={!!countError || !!listError}
      amounts={amounts}
      listData={listData?.listObjectTypes}
      sorting={sorting}
      pagination={pagination}
    />
  );
};
