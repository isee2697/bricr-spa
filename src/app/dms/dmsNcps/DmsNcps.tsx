import React from 'react';

import { DmsEntityType } from 'api/types';
import { FoldersContainer } from 'app/shared/dms/folders/FoldersContainer';

import { DmsNcpsProps } from './DmsNcps.types';

export const DmsNcps = ({ ncps, type, isLoading, pagination }: DmsNcpsProps) => {
  return (
    <FoldersContainer
      entityItems={ncps.map(item => ({
        id: item.id,
        name: item.name ?? '',
      }))}
      entityType={DmsEntityType.Pim}
      type={type}
      isLoading={isLoading}
      pagination={pagination}
    />
  );
};
