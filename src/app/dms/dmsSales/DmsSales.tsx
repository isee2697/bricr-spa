import React from 'react';

import { DmsEntityType } from 'api/types';
import { FoldersContainer } from 'app/shared/dms/folders/FoldersContainer';

import { DmsSalesProps } from './DmsSales.types';

export const DmsSales = ({ sales, isLoading, type, pagination }: DmsSalesProps) => {
  return (
    <FoldersContainer
      entityItems={sales.map(item => ({
        id: item.id,
        name: item.name ?? '',
      }))}
      entityType={DmsEntityType.Sales}
      type={type}
      isLoading={isLoading}
      pagination={pagination}
    />
  );
};
