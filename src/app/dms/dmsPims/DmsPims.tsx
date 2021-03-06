import React from 'react';

import { DmsEntityType } from 'api/types';
import { FoldersContainer } from 'app/shared/dms/folders/FoldersContainer';

import { DmsPimsProps } from './DmsPims.types';

export const DmsPims = ({ pims, type, isLoading, pagination, sorting }: DmsPimsProps) => {
  return (
    <FoldersContainer
      entityItems={(pims.listPims.items || []).map(item => ({
        id: item.id,
        name: `${item.street} ${item.houseNumber}${item.houseNumberAddition ? ` ${item.houseNumberAddition}` : ''}`,
      }))}
      entityType={DmsEntityType.Pim}
      type={type}
      isLoading={isLoading}
      pagination={pagination}
      sorting={sorting}
    />
  );
};
