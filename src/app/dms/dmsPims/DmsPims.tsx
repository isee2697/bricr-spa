import React from 'react';
import { useParams } from 'react-router-dom';

import { DmsFolderType } from 'app/dms/Dms.types';
import { DmsEntityType } from 'api/types';

import { DmsPimsProps } from './DmsPims.types';
import { DmsFoldersContainer } from './dmsFolders/DmsFoldersContainer';

export const DmsPims = ({ dms }: DmsPimsProps) => {
  const { type } = useParams<{ type: string }>();

  const data = dms.folders?.find(item => item.data.entityType === DmsEntityType.Pim);

  return <DmsFoldersContainer data={data?.data as DmsFolderType} entityType={DmsEntityType.Pim} type={type} />;
};
