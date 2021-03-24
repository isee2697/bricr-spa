import React from 'react';

import { CreateDmsFolderInput, useCreateDmsFolderMutation } from 'api/types';

import { Folders } from './Folders';
import { FoldersContainerProps } from './Folders.types';

export const FoldersContainer = (props: FoldersContainerProps) => {
  const [createDmsFolder] = useCreateDmsFolderMutation();

  const onAddFolder = async (values: CreateDmsFolderInput) => {
    await createDmsFolder({
      variables: {
        input: values,
      },
    });
  };

  return <Folders {...props} onAddFolder={onAddFolder} />;
};
