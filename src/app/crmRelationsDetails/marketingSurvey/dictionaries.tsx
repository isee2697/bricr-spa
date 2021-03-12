import { HeaderColumnItemType } from 'ui/molecules/columnModal/ColumnModal.types';

import { SurveyItem } from './MarketingSurvey.types';

export const MARKETING_SURVEY_MOVABLE_HEADER_COLUMNS: HeaderColumnItemType<SurveyItem>[] = [
  {
    value: 'name',
    hidden: false,
  },
  {
    value: 'sent',
    hidden: false,
  },
  {
    value: 'completed',
    hidden: false,
  },
  {
    value: 'type',
    hidden: false,
  },
  {
    value: 'score',
    hidden: false,
  },
];
