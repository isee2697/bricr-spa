import React from 'react';
import { useParams } from 'react-router';

import { DmsEntityType } from 'api/types';
import { Folders } from 'app/shared/dms/folders/Folders';

import { DmsCrmsProps } from './DmsCrms.types';

export const DmsCrms = ({ crms, isLoading }: DmsCrmsProps) => {
  const { type } = useParams<{ type: string }>();

  return (
    <Folders
      entityItems={crms.map(item => ({
        id: item.id,
        name: `${item.firstName} ${item.lastName}`,
      }))}
      type={type}
      entityType={DmsEntityType.Crm}
      isLoading={isLoading}
    />
  );
};
