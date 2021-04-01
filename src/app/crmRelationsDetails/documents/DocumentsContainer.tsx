import React from 'react';

import { Documents } from './Documents';
import { DocumentsContainerProps } from './Documents.types';

export const DocumentsContainer = ({ path, ...props }: DocumentsContainerProps) => {
  return <Documents {...props} path={path} />;
};
