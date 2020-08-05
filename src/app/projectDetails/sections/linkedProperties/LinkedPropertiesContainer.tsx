import React from 'react';
import { useQueryParam } from 'use-query-params';
import { useParams } from 'react-router';

import { ActionTabStatus } from 'ui/molecules/actionTabs/ActionTabs.types';
import { usePimsSorting } from 'app/shared/usePimsSorting/usePimsSorting';
import { usePagination } from 'hooks';
import { PerPageType } from 'ui/atoms/pagination/Pagination.types';
import {
  NcpLinkedPimsDocument,
  useListNcpLinkedPimsCountQuery,
  useNcpLinkedPimsQuery,
  useUpdateNcpLinkedPropertiesListDescriptionMutation,
} from 'api/types';
import { ProjectDetailsProps } from 'app/projectDetails/ProjectDetails.types';
import { LinkedProperties } from 'app/shared/linkedProperties/LinkedProperties';

const PER_PAGE_OPTIONS: PerPageType[] = [10, 25, 'All'];

export const LinkedPropertiesContainer = ({ onSidebarOpen, isSidebarVisible }: ProjectDetailsProps) => {
  const { id } = useParams<{ id: string; projectId: string }>();
  const [status = 'active', setStatus] = useQueryParam<ActionTabStatus>('status');

  const { loading: isCountLoading, error: countError, data: countData } = useListNcpLinkedPimsCountQuery({
    variables: { id },
  });
  const [updateLinkedPropertiesListDescription] = useUpdateNcpLinkedPropertiesListDescriptionMutation();

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

  const { loading: isListLoading, error: listError, data: listData } = useNcpLinkedPimsQuery({
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
            query: NcpLinkedPimsDocument,
            variables: { id, ...sortQuery, ...paginationQuery },
          },
        ],
      });

      if (!data?.updateNcpLinkedPropertiesListDescription) {
        throw new Error();
      }

      return undefined;
    } catch (e) {
      return { error: true };
    }
  };

  if (!listData?.getNcpLinkedPims) {
    return null;
  }

  return (
    <LinkedProperties
      status={status}
      onStatusChange={setStatus}
      isLoading={isCountLoading || isListLoading}
      isError={!!countError || !!listError}
      amounts={amounts}
      listData={listData?.getNcpLinkedPims.linkedProperties.items ?? []}
      sorting={sorting}
      pagination={pagination}
      description={listData.getNcpLinkedPims.description ?? ''}
      onDescriptionSave={handleSave}
      dateUpdated={listData.getNcpLinkedPims.dateUpdated}
      updatedBy={listData.getNcpLinkedPims.lastEditedBy}
      isSidebarVisible={isSidebarVisible}
      onSidebarOpen={onSidebarOpen}
      titleId="project_details.properties.project_title"
      projectId={id}
      refetchQueryVariables={{ ...sortQuery, ...paginationQuery }}
    />
  );
};
