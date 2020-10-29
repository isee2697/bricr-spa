import { ReactElement } from 'react';
import { DateTime } from 'luxon';

import { Document, DocumentRequestStatus } from '../Documents.types';

export type DocumentListItemProps = {
  rowIndex: number;
  checkbox: ReactElement;
  checked: boolean;
  item: Document;
};

export type DocumentRequestStep = {
  status: 'completed' | 'rejected' | 'active' | 'inactive';
  step: DocumentRequestStatus;
  date?: DateTime;
};
