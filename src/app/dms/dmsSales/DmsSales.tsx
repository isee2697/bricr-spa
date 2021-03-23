import React from 'react';
import { useParams } from 'react-router-dom';

import { DmsFolders } from '../dmsPims/dmsFolders/DmsFolders';
import { DmsFolderType } from '../Dms.types';
import { DmsEntityType } from 'api/types';

import { DmsSalesProps } from './DmsSales.types';

export const DmsSales = ({ dms }: DmsSalesProps) => {
  const { type } = useParams<{ type: string }>();

  const data = dms.folders?.find(item => item.data.entityType === DmsEntityType.Sales);

  return <DmsFolders data={data?.data as DmsFolderType} entityType={DmsEntityType.Sales} type={type} />;
};
