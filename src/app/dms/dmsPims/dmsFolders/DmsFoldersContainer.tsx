import React from 'react';

import { CreateDmsFolderInput, useCreateDmsFolderMutation } from 'api/types';

import { DmsFolders } from './DmsFolders';
import { DmsFoldersContainerProps } from './DmsFolders.types';

export const DmsFoldersContainer = (props: DmsFoldersContainerProps) => {
  const [createDmsFolder] = useCreateDmsFolderMutation();

  const onAddFolder = async (values: CreateDmsFolderInput) => {
    await createDmsFolder({
      variables: {
        input: values,
      },
    });
  };

  return <DmsFolders {...props} onAddFolder={onAddFolder} />;
};
