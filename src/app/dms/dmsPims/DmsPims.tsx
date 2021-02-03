import React from 'react';
import { useParams } from 'react-router-dom';

import { DmsFolderType } from 'app/dms/Dms.types';

import { DmsFolders } from './dmsFolders/DmsFolders';
import { DmsPimsProps } from './DmsPims.types';

export const DmsPims = ({ dms }: DmsPimsProps) => {
  const { type } = useParams<{ type: string }>();

  const data = dms.folders?.find(item => item.data.id === 'pim');

  return <DmsFolders data={data?.data as DmsFolderType} type={type} />;
};
