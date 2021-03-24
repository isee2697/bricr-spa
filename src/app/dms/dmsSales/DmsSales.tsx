import React from 'react';
import { useParams } from 'react-router-dom';

import { DmsEntityType } from 'api/types';
import { FoldersContainer } from 'app/shared/dms/folders/FoldersContainer';

import { DmsSalesProps } from './DmsSales.types';

export const DmsSales = ({ sales, isLoading }: DmsSalesProps) => {
  const { type } = useParams<{ type: string }>();

  return (
    <FoldersContainer
      entityItems={sales.map(item => ({
        id: item.id,
        name: item.name ?? '',
      }))}
      entityType={DmsEntityType.Sales}
      type={type}
      isLoading={isLoading}
    />
  );
};
