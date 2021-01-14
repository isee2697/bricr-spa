import { DateTime } from 'luxon';
import React from 'react';

import {
  Checklist,
  ChecklistStatus,
  ChecklistStepStatus,
  ChecklistType,
  CheclistStepType,
} from '../checklist/Checklist.types';
import { ChecklistListItem, DocumentCondition, DocumentType } from '../checklistList/ChecklistList.types';

import { CheckListItemDetails } from './CheckListItemDetails';
import { ChecklistItemDetailsContainerProps } from './ChecklistItemDetails.types';

export const CheckListItemDetailsContainer = (props: ChecklistItemDetailsContainerProps) => {
  const checklistItem: ChecklistListItem = {
    id: '0001',
    type: DocumentType.AnnualStatementLastYear,
    isUploaded: false,
    isAccepted: false,
    condition: DocumentCondition.Mandatory,
  };

  const list: Checklist = {
    id: '0001',
    image: 'http://placeimg.com/104/152/arch',
    modifiedAt: DateTime.local(),
    title: 'Checklist Isenburgstraat 36',
    status: ChecklistStatus.Active,
    type: ChecklistType.Interest,
    accepted: 2,
    checked: 4,
    steps: [
      {
        step: CheclistStepType.Invited,
        date: DateTime.local(),
        status: ChecklistStepStatus.Completed,
      },
      {
        step: CheclistStepType.Started,
        date: DateTime.local(),
        status: ChecklistStepStatus.Completed,
      },
      {
        step: CheclistStepType.Uploaded,
        date: DateTime.local(),
        status: ChecklistStepStatus.InProgress,
        uploadedCount: 2,
        uploadedTotalCount: 4,
      },
      {
        step: CheclistStepType.Completed,
        date: DateTime.local(),
        status: ChecklistStepStatus.Pending,
      },
    ],
  };

  return <CheckListItemDetails {...props} item={checklistItem} list={list} />;
};
