import React, { useState } from 'react';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { usePimDocumentsCheckListQueryParams } from 'app/shared/usePimDocumentsCheckListQueryParams/usePimDocumentsCheckListQueryParams';
import { CHECKLIST_ITEMS } from 'api/mocks/checklist';

import { DocumentsCheckList } from './CheckList';
import { CheckList } from './CheckList.types';

export const DocumentsCheckListContainer = (props: PimDetailsSectionProps) => {
  const [checkListItems, setCheckListItems] = useState<CheckList[]>();
  const { status, setStatus } = usePimDocumentsCheckListQueryParams();

  const handleAddChecklist = () => {
    setCheckListItems(CHECKLIST_ITEMS);
  };

  return (
    <DocumentsCheckList
      {...props}
      checkListItems={checkListItems || []}
      status={status}
      onStatusChange={setStatus}
      onAddChecklist={handleAddChecklist}
    />
  );
};
