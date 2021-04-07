import { SurveyItemStatus, SurveyItemType } from 'app/shared/dms/cardItems/surveyItem/SurveyItem.types';
import { SurveyStepStatus } from 'app/shared/dms/cardItems/surveyItemStepper/SurveyItemStepper.types';

import { MAIN_USER } from './profile';

export const DMS_SURVEY_ITEMS: SurveyItemType[] = [
  {
    owners: [MAIN_USER, MAIN_USER],
    steps: [
      {
        step: SurveyStepStatus.Invited,
        date: new Date().toISOString(),
        status: 'completed',
      },
      {
        step: SurveyStepStatus.Started,
        date: new Date().toISOString(),
        status: 'active',
      },
      {
        step: SurveyStepStatus.Completed,
        status: 'inactive',
      },
    ],
    status: SurveyItemStatus.ActionRequired,
  },
  {
    owners: [MAIN_USER, MAIN_USER],
    steps: [
      {
        step: SurveyStepStatus.Invited,
        date: new Date().toISOString(),
        status: 'completed',
      },
      {
        step: SurveyStepStatus.Started,
        date: new Date().toISOString(),
        status: 'completed',
      },
      {
        step: SurveyStepStatus.Completed,
        date: new Date().toISOString(),
        status: 'completed',
      },
    ],
    status: SurveyItemStatus.ActionRequired,
  },
];
