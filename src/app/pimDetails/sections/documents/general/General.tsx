import React from 'react';
import { useParams } from 'react-router';

import { DmsEntityType } from 'api/types';
import { SecondaryFolderContainer } from 'app/shared/dms/secondaryFolder/SecondaryFolderContainer';

import { DocumentsGeneralProps } from './General.types';

export const DocumentsGeneral = ({ title }: DocumentsGeneralProps) => {
  const { id } = useParams<{ id: string }>();

  return (
    <SecondaryFolderContainer id={id} name={title ?? ''} type={''} entityType={DmsEntityType.Pim} hideExitButton />
  );
};
