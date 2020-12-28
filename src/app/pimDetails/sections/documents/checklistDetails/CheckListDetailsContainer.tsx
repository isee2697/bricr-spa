import React from 'react';

import { CHECKLIST_ITEMS } from 'api/mocks/checklist';
import { DocumentFile } from '../../summary/auditChecklist/documents/Documents.types';

import { DocumentsCheckListDetails } from './CheckListDetails';

export const DocumentsCheckListDetailsContainer = ({ id, onClose }: { id: string; onClose: VoidFunction }) => {
  const file = CHECKLIST_ITEMS.find(item => item.id === id)?.document;

  return <DocumentsCheckListDetails file={file as DocumentFile} onClose={onClose} />;
};
