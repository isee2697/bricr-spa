import React from 'react';
import { useQueryParam } from 'use-query-params';

import { PerPageType } from 'ui/atoms/pagination/Pagination.types';
import { usePimsSorting } from '../pim/usePimsSorting/usePimsSorting';
import { usePagination } from 'hooks';
import { ActionTabStatus } from 'ui/molecules/actionTabs/ActionTabs.types';

import { Project } from './Project';
import { ListProject } from './Project.types';

const EMPTY_LIST: ListProject = { listProject: [] };
const PER_PAGE_OPTIONS: PerPageType[] = [10, 25, 'All'];

const PROJECT_DATA: ListProject = {
  listProject: [
    {
      id: 'My_projectID_1',
      dateCreated: '2020-04-28T07:30:18.162Z',
      dateUpdated: '2020-04-28T07:30:18.162Z',
      name: 'Custom name of project',
      measurements: {
        surfaceFrom: 89,
        surfaceTo: 119,
        roomsFrom: 2,
        roomsTo: 4,
      },
      mainImage: 'https://source.unsplash.com/featured/?building',
      logo: 'https://source.unsplash.com/featured/?logo',
      mainColor: '#0ABE67',
      subColor: '#0ABE67',
      amountOfProperties: 269,
      amountOfObjectTypes: 5,
      availableProperties: 101,
      underOptionProperties: 561,
      soldProperties: 2,
      rentedProperties: 1,
      amountOfMatches: 2498,
      amountOfInterests: 1789,
      amountOfCandidates: 561,
      amountOfOptands: 3,
      prices: {
        rentFrom: 1399,
        rentTo: 2500,
        saleFrom: 375500,
        saleTo: 999000,
      },
      amountOfPhases: 6,
    },
    {
      id: 'My_projectID_2',
      dateCreated: '2020-04-28T07:30:18.162Z',
      dateUpdated: '2020-04-28T07:30:18.162Z',
      name: 'Custom name of project',
      measurements: {
        surfaceFrom: 89,
        surfaceTo: 119,
        roomsFrom: 2,
        roomsTo: 4,
      },
      mainImage: 'https://source.unsplash.com/featured/?construction',
      logo: 'https://source.unsplash.com/featured/?logo',
      mainColor: '#0ABE67',
      subColor: '#0ABE67',
      amountOfProperties: 269,
      amountOfObjectTypes: 5,
      soldProperties: 190,
      availableProperties: 101,
      underOptionProperties: 561,
      rentedProperties: 1,
      amountOfMatches: 2498,
      amountOfInterests: 1789,
      amountOfCandidates: 561,
      amountOfOptands: 3,
      prices: {
        rentFrom: 1399,
        rentTo: 2500,
        saleFrom: 375500,
        saleTo: 999000,
      },
      amountOfPhases: 6,
    },
  ],
};

export const ProjectContainer = () => {
  const [status = 'active', setStatus] = useQueryParam<ActionTabStatus>('status');
  const [type = 'nc_sale', setType] = useQueryParam<string>('type');

  const { loading: isCountLoading, error: countError, data: countData } = {
    loading: false,
    error: false,
    data: { activeCount: { metadata: { total: 3 } }, archivedCount: { metadata: { total: 3 } } },
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
    data: PROJECT_DATA,
  };

  return (
    <Project
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
