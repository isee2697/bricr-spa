import React from 'react';

import { Documents } from './Documents';
import { DocumentsContainerProps } from './Documents.types';

export const DocumentsConatiner = (props: DocumentsContainerProps) => {
  return <Documents {...props} />;
};
