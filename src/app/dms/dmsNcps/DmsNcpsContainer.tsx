import React from 'react';

import { ListNcp, ProjectType, useListNcpsCountQuery, useListNcpsQuery } from 'api/types';
import { PimTypes } from 'app/pim/dictionaries';
import { usePagination } from 'hooks';
import { PerPageType } from 'ui/atoms/pagination/Pagination.types';
import { useProjectSorting } from 'app/project/useProjectSorting/useProjectSorting';

import { DmsNcps } from './DmsNcps';
import { DmsNcpsContainerProps } from './DmsNcps.types';

const PER_PAGE_OPTIONS: PerPageType[] = [10, 25, 'All'];

const getNcpFilterVariables = (type: string): ProjectType => {
  return PimTypes.find(pimType => pimType.name === type)?.projectType ?? ProjectType.NewConstruction;
};

export const DmsNcpsContainer = ({ type: ncpType }: DmsNcpsContainerProps) => {
  const projectType = getNcpFilterVariables(ncpType);

  const { loading: isCountLoading, data: countData } = useListNcpsCountQuery({
    variables: {
      projectType,
    },
    fetchPolicy: 'no-cache',
  });

  const amounts =
    (countData && {
      actionRequired: 0,
      active: countData.activeCount.metadata?.total || 0,
      archived: countData.archivedCount.metadata?.total || 0,
    }) ??
    undefined;

  const { query: sortQuery } = useProjectSorting();

  const { pagination, query: paginationQuery } = usePagination({
    prefix: 'active',
    itemsCount: amounts ? amounts['active'] : 0,
    perPageOptions: PER_PAGE_OPTIONS,
  });

  const { loading: isListLoading, data: listData } = useListNcpsQuery({
    variables: {
      archived: false,
      ...sortQuery,
      ...paginationQuery,
      projectType,
    },
    fetchPolicy: 'no-cache',
  });

  return (
    <DmsNcps
      ncps={(listData?.listNcps.items || []) as ListNcp[]}
      type={ncpType}
      isLoading={isCountLoading || isListLoading}
      pagination={pagination}
    />
  );
};
