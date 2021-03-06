import React from 'react';
import { useParams } from 'react-router';

import { DmsEntityType } from 'api/types';
import { FoldersContainer } from 'app/shared/dms/folders/FoldersContainer';

import { DmsCrmsProps } from './DmsCrms.types';

export const DmsCrms = ({ crms, isLoading, pagination, sorting }: DmsCrmsProps) => {
  const { type } = useParams<{ type: string }>();

  return (
    <FoldersContainer
      entityItems={crms.map(item => ({
        id: item.id,
        name: `${item.firstName} ${item.lastName}${item.email ? ` - ${item.email}` : ''}`,
      }))}
      type={type}
      entityType={DmsEntityType.Crm}
      isLoading={isLoading}
      pagination={pagination}
      sorting={sorting}
    />
  );
};
