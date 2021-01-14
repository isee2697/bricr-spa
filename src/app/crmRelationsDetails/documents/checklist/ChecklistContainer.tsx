import { DateTime } from 'luxon';
import React, { useState } from 'react';

import { Checklist } from './Checklist';
import {
  ChecklistContainerProps,
  Checklist as ChecklistList,
  ChecklistType,
  ChecklistStepStatus,
  CheclistStepType,
  ChecklistStatus,
} from './Checklist.types';

export const ChecklistContainer = (props: ChecklistContainerProps) => {
  const [status, setStatus] = useState<ChecklistStatus>(ChecklistStatus.Active);

  const mockData: ChecklistList[] = [
    {
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
    },
    {
      id: '0002',
      image: 'http://placeimg.com/104/152/arch',
      modifiedAt: DateTime.local(),
      title: 'Checklist Weerschijnvlinder 8',
      status: ChecklistStatus.Active,
      type: ChecklistType.Interest,
      accepted: 0,
      checked: 6,
      steps: [
        {
          step: CheclistStepType.Invited,
          date: DateTime.local(),
          status: ChecklistStepStatus.Completed,
        },
        {
          step: CheclistStepType.Started,
          date: DateTime.local(),
          status: ChecklistStepStatus.Rejected,
        },
        {
          step: CheclistStepType.Uploaded,
          date: DateTime.local(),
          status: ChecklistStepStatus.Pending,
          uploadedCount: 5,
          uploadedTotalCount: 5,
        },
        {
          step: CheclistStepType.Completed,
          date: DateTime.local(),
          status: ChecklistStepStatus.Pending,
        },
      ],
    },
    {
      id: '0003',
      image: 'http://placeimg.com/104/152/arch',
      modifiedAt: DateTime.local(),
      title: 'Checklist Karnemelkplein 13',
      status: ChecklistStatus.Active,
      type: ChecklistType.PropertyForSales,
      accepted: 5,
      checked: 5,
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
          status: ChecklistStepStatus.Completed,
          uploadedCount: 10,
          uploadedTotalCount: 10,
        },
        {
          step: CheclistStepType.Completed,
          date: DateTime.local(),
          status: ChecklistStepStatus.Completed,
        },
      ],
    },
  ];

  return <Checklist {...props} lists={mockData} status={status} onStatusChange={setStatus} />;
};
