import React from 'react';

import { Folders } from './Folders';
import { FoldersContainerProps } from './Folders.types';

export const FoldersContainer = (props: FoldersContainerProps) => {
  return <Folders {...props} />;
};
