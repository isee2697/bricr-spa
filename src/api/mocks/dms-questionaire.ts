import { CrmStatus } from 'api/types';
import { QuestionairesItemType } from 'app/shared/dms/cardItems/questionaireItem/QuestionairesItem.types';
import { QuestionairesItemStepStatus } from 'app/shared/dms/cardItems/questionaireItemStepper/QuestionairesItemStepper.types';

import { MAIN_USER } from './profile';

export const DMS_QUESTIONAIRE_ITEMS: QuestionairesItemType[] = [
  {
    owners: [MAIN_USER, MAIN_USER],
    steps: [
      {
        step: QuestionairesItemStepStatus.Invited,
        date: new Date().toISOString(),
        status: 'completed',
      },
      {
        step: QuestionairesItemStepStatus.Started,
        date: new Date().toISOString(),
        status: 'active',
      },
      {
        step: QuestionairesItemStepStatus.Completed,
        status: 'inactive',
      },
      {
        step: QuestionairesItemStepStatus.Frozen,
        status: 'inactive',
      },
    ],
    type: 'sale',
    status: CrmStatus.ActionRequired,
  },
  {
    owners: [MAIN_USER, MAIN_USER],
    steps: [
      {
        step: QuestionairesItemStepStatus.Invited,
        date: new Date().toISOString(),
        status: 'completed',
      },
      {
        step: QuestionairesItemStepStatus.Started,
        date: new Date().toISOString(),
        status: 'completed',
      },
      {
        step: QuestionairesItemStepStatus.Completed,
        date: new Date().toISOString(),
        status: 'completed',
      },
      {
        step: QuestionairesItemStepStatus.Frozen,
        status: 'inactive',
      },
    ],
    type: 'sale',
    status: CrmStatus.ActionRequired,
  },
];
