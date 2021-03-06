import React from 'react';

import { PerPageType } from 'ui/atoms/pagination/Pagination.types';
import { useLocale, usePagination, useSnackbar } from 'hooks';
import {
  BulkEntities,
  BulkOperations,
  ListNcp,
  ListNcpsCountDocument,
  ListNcpsDocument,
  NcpBulkDetailsDocument,
  useBulkMutation,
  useListNcpsCountQuery,
  useListNcpsQuery,
  useNcpBulkDetailsLazyQuery,
  useUndoEntityMutation,
} from 'api/types';
import { usePimQueryParams } from 'app/shared/usePimQueryParams/usePimQueryParams';

import { useGetProjectType } from './useGetProjectType/useGetProjectType';
import { Project } from './Project';
import { useProjectSorting } from './useProjectSorting/useProjectSorting';
import { BulkForm } from './Project.types';

const PER_PAGE_OPTIONS: PerPageType[] = [10, 25, 'All'];

export const ProjectContainer = () => {
  const projectType = useGetProjectType();
  const { formatMessage } = useLocale();
  const { open: openSnackbar } = useSnackbar();
  const { status, setStatus, priceTypeFilter } = usePimQueryParams({});

  const [bulk] = useBulkMutation();
  const [getBulkData, { data: bulkData }] = useNcpBulkDetailsLazyQuery({ fetchPolicy: 'network-only' });
  const [undoEntity] = useUndoEntityMutation();

  const { loading: isCountLoading, data: countData } = useListNcpsCountQuery({
    variables: { ...priceTypeFilter, projectType },
  });

  const amounts =
    (countData && {
      actionRequired: 0,
      active: countData.activeCount.metadata?.total || 0,
      archived: countData.archivedCount.metadata?.total || 0,
    }) ??
    undefined;

  const { sorting, query: sortQuery } = useProjectSorting();

  const { pagination, query: paginationQuery } = usePagination({
    prefix: status,
    itemsCount: amounts ? amounts[status] : 0,
    perPageOptions: PER_PAGE_OPTIONS,
  });

  const { loading: isListLoading, data: listData } = useListNcpsQuery({
    variables: {
      ...priceTypeFilter,
      archived: status === 'archived',
      ...sortQuery,
      ...paginationQuery,
      projectType,
    },
    fetchPolicy: 'network-only',
  });

  const handleOperation = async (operation: BulkOperations, projects: ListNcp[]) => {
    const bulkActionIds = projects.map(p => p.id);

    const { data: result } = await bulk({
      variables: {
        input: {
          operation,
          entity: BulkEntities.Ncp,
          ids: bulkActionIds,
        },
      },
      refetchQueries: [
        {
          query: ListNcpsDocument,
          variables: { archived: status === 'archived', ...sortQuery, ...paginationQuery },
        },
        {
          query: ListNcpsCountDocument,
          variables: {},
        },
      ],
    });

    if (!result || !result.bulk) {
      throw new Error();
    }

    openSnackbar({
      severity: 'success',
      message: formatMessage({ id: `project.${operation}.title` }),
      modalContent: <></>,
      modalTitle: formatMessage({ id: `project.${operation}.details_title` }),
      onUndo: () => handleUndo(result.bulk.undoIds ?? [], bulkActionIds),
    });

    return undefined;
  };

  const handleUndo = async (undoIds: string[], bulkActionIds: string[]) => {
    if (undoIds.length > 0) {
      const { data: result } = await undoEntity({
        variables: {
          input: {
            undoIds,
          },
        },
        refetchQueries: [
          {
            query: NcpBulkDetailsDocument,
            variables: { ids: bulkActionIds },
          },
          {
            query: ListNcpsDocument,
            variables: { archived: status === 'archived', ...sortQuery, ...paginationQuery },
          },
          {
            query: ListNcpsCountDocument,
            variables: {},
          },
        ],
      });

      if (!result || !result.undoEntity) {
        throw new Error();
      }
    }

    return undefined;
  };

  const fetchBulkDetails = (projects: ListNcp[]) => {
    getBulkData({ variables: { ids: projects.map(p => p.id) } });
  };

  const handleBulk = async (projects: ListNcp[], formData: unknown) => {
    const data = formData as BulkForm;

    const bulkActionIds = projects.map(p => p.id);
    const { data: result } = await bulk({
      variables: {
        input: {
          operation: BulkOperations.SetField,
          entity: BulkEntities.Ncp,
          ids: projects.map(p => p.id),
          field: data.operation,
          value: data[data.operation],
        },
      },
      refetchQueries: [
        {
          query: NcpBulkDetailsDocument,
          variables: { ids: bulkActionIds },
        },
        {
          query: ListNcpsDocument,
          variables: { archived: status === 'archived', ...sortQuery, ...paginationQuery },
        },
        {
          query: ListNcpsCountDocument,
          variables: {},
        },
      ],
    });

    if (!result || !result.bulk) {
      throw new Error();
    }

    openSnackbar({
      severity: 'success',
      message: formatMessage({ id: `project.${BulkOperations.SetField}.title` }),
      modalContent: <></>,
      modalTitle: formatMessage({ id: `project.${BulkOperations.SetField}.details_title` }),
      onUndo: () => handleUndo(result.bulk.undoIds ?? [], bulkActionIds),
    });

    return undefined;
  };

  return (
    <Project
      status={status}
      onStatusChange={setStatus}
      isLoading={isCountLoading || isListLoading}
      amounts={amounts}
      type={projectType}
      listData={status === 'actionRequired' ? ([] as ListNcp[]) : listData?.listNcps?.items ?? []}
      sorting={sorting}
      pagination={pagination}
      onOperation={handleOperation}
      bulkData={
        bulkData
          ? {
              cityValues: bulkData.city?.map(c => c.value as string) ?? [],
            }
          : null
      }
      onBulkOpen={fetchBulkDetails}
      onBulk={handleBulk}
    />
  );
};
