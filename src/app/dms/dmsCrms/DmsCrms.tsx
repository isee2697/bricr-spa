import React from 'react';
import { useParams } from 'react-router';

import { DmsEntityType } from 'api/types';
import { DmsFolderType } from '../Dms.types';
import { DmsFolders } from '../dmsPims/dmsFolders/DmsFolders';

import { DmsCrmsProps } from './DmsCrms.types';

export const DmsCrms = ({ dms }: DmsCrmsProps) => {
  const { type } = useParams<{ type: string }>();

  const data = dms.folders?.find(item => item.data.entityType === DmsEntityType.Crm);

  return <DmsFolders data={data?.data as DmsFolderType} type={type} entityType={DmsEntityType.Crm} />;
};
