import React from 'react';
import { useQueryParam } from 'use-query-params';
import { useParams } from 'react-router';
import { ActionTabStatus } from 'ui/molecules/actionTabs/ActionTabs.types';
import { usePagination } from 'hooks';
import { PerPageType } from 'ui/atoms/pagination/Pagination.types';
import {
  ObjectTypeListDescriptionDocument,
  useListObjectTypesCountQuery,
  useListObjectTypesQuery,
  useObjectTypeListDescriptionQuery,
  useUpdateObjectTypesListDescriptionMutation,
} from 'api/types';
import { ProjectDetailsProps } from 'app/projectDetails/ProjectDetails.types';

import { useObjectTypesSorting } from './useObjectTypesSorting/useObjectTypesSorting';
import { ObjectTypes } from './ObjectTypes';

const PER_PAGE_OPTIONS: PerPageType[] = [10, 25, 'All'];

export const ObjectTypesContainer = ({ onSidebarOpen, isSidebarVisible }: ProjectDetailsProps) => {
  const { id } = useParams<{ id: string }>();
  const [status = 'active', setStatus] = useQueryParam<ActionTabStatus>('status');

  const { loading: isCountLoading, error: countError, data: countData } = useListObjectTypesCountQuery({
    variables: { ncpId: id },
  });

  const { data: description } = useObjectTypeListDescriptionQuery({ variables: { id } });
  const [updateObjectTypeListDescription] = useUpdateObjectTypesListDescriptionMutation();

  const amounts =
    (countData && {
      actionRequired: 0,
      active: countData.activeCount.metadata?.total || 0,
      archived: countData.archivedCount.metadata?.total || 0,
    }) ??
    undefined;

  const { sorting, query: sortQuery } = useObjectTypesSorting();

  const { pagination, query: paginationQuery } = usePagination({
    prefix: status,
    itemsCount: amounts ? amounts[status] : 0,
    perPageOptions: PER_PAGE_OPTIONS,
  });

  const { loading: isListLoading, error: listError, data: listData } = useListObjectTypesQuery({
    variables: { ncpId: id, archived: status === 'archived' || null, ...sortQuery, ...paginationQuery },
    fetchPolicy: 'no-cache',
  });

  const handleSave = async (values: { description: string }) => {
    try {
      const { data } = await updateObjectTypeListDescription({
        variables: {
          input: {
            id,
            description: values.description,
          },
        },
        refetchQueries: [
          {
            query: ObjectTypeListDescriptionDocument,
            variables: { id },
          },
        ],
      });

      if (!data?.updateObjectTypesListDescription) {
        throw new Error();
      }

      return undefined;
    } catch (e) {
      return { error: true };
    }
  };

  if (!description?.getNcp) {
    return null;
  }

  return (
    <ObjectTypes
      isSidebarVisible={isSidebarVisible}
      onSidebarOpen={onSidebarOpen}
      status={status}
      onStatusChange={setStatus}
      isLoading={isCountLoading || isListLoading}
      isError={!!countError || !!listError}
      amounts={amounts}
      listData={listData?.listObjectTypes.items ?? []}
      sorting={sorting}
      pagination={pagination}
      description={description?.getNcp.objectTypesListDescription ?? ''}
      onDescriptionSave={handleSave}
      dateUpdated={description?.getNcp.objectTypesListLastUpdatedOn}
      updatedBy={description?.getNcp.objectTypesListLastUpdatedBy}
    />
  );
};
