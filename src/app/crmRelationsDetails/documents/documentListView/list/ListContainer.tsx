import React from 'react';

import { DocumentsList } from './List';
import { DocumentsListContainerProps } from './List.types';

export const DocumentsListContainer = (props: DocumentsListContainerProps) => {
  return <DocumentsList {...props} />;
};
