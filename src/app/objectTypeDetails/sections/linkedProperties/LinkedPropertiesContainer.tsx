import React from 'react';
import { useQueryParam } from 'use-query-params';
import { useParams } from 'react-router';

import { ActionTabStatus } from 'ui/molecules/actionTabs/ActionTabs.types';
import { usePimsSorting } from 'app/shared/usePimsSorting/usePimsSorting';
import { usePagination } from 'hooks';
import { PerPageType } from 'ui/atoms/pagination/Pagination.types';
import {
  ObjectTypeLinkedPimsDocument,
  useListObjectTypeLinkedPimsCountQuery,
  useObjectTypeLinkedPimsQuery,
  useUpdateLinkedPropertiesListDescriptionMutation,
} from 'api/types';
import { ProjectDetailsProps } from 'app/projectDetails/ProjectDetails.types';
import { LinkedProperties } from 'app/shared/linkedProperties/LinkedProperties';

const PER_PAGE_OPTIONS: PerPageType[] = [10, 25, 'All'];

export const LinkedPropertiesContainer = ({ onSidebarOpen, isSidebarVisible }: ProjectDetailsProps) => {
  const { id, projectId } = useParams<{ id: string; projectId: string }>();
  const [status = 'active', setStatus] = useQueryParam<ActionTabStatus>('status');

  const { loading: isCountLoading, error: countError, data: countData } = useListObjectTypeLinkedPimsCountQuery({
    variables: { id },
  });
  const [updateLinkedPropertiesListDescription] = useUpdateLinkedPropertiesListDescriptionMutation();

  const amounts =
    (countData && {
      actionRequired: 0,
      active: countData.activeCount.linkedProperties.metadata?.total || 0,
      archived: countData.archivedCount.linkedProperties.metadata?.total || 0,
    }) ??
    undefined;

  const { sorting, query: sortQuery } = usePimsSorting();

  const { pagination, query: paginationQuery } = usePagination({
    prefix: status,
    itemsCount: amounts ? amounts[status] : 0,
    perPageOptions: PER_PAGE_OPTIONS,
  });

  const { loading: isListLoading, error: listError, data: listData } = useObjectTypeLinkedPimsQuery({
    variables: { id, ...sortQuery, ...paginationQuery },
    fetchPolicy: 'no-cache',
  });

  const handleSave = async (values: { description: string }) => {
    try {
      const { data } = await updateLinkedPropertiesListDescription({
        variables: {
          input: {
            id,
            description: values.description,
          },
        },
        refetchQueries: [
          {
            query: ObjectTypeLinkedPimsDocument,
            variables: { id, ...sortQuery, ...paginationQuery },
          },
        ],
      });

      if (!data?.updateLinkedPropertiesListDescription) {
        throw new Error();
      }

      return undefined;
    } catch (e) {
      return { error: true };
    }
  };

  if (!listData?.getObjectTypeLinkedPims) {
    return null;
  }

  return (
    <LinkedProperties
      status={status}
      onStatusChange={setStatus}
      isLoading={isCountLoading || isListLoading}
      isError={!!countError || !!listError}
      amounts={amounts}
      listData={listData?.getObjectTypeLinkedPims.linkedProperties.items ?? []}
      sorting={sorting}
      pagination={pagination}
      description={listData.getObjectTypeLinkedPims.description ?? ''}
      onDescriptionSave={handleSave}
      dateUpdated={listData.getObjectTypeLinkedPims.dateUpdated}
      updatedBy={listData.getObjectTypeLinkedPims.lastEditedBy}
      isSidebarVisible={isSidebarVisible}
      onSidebarOpen={onSidebarOpen}
      titleId="project_details.properties.object_type_title"
      showAddButton
      projectId={projectId}
      refetchQueryVariables={{ ...sortQuery, ...paginationQuery }}
    />
  );
};
