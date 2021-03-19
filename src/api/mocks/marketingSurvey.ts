import {
  MarketingSurveyDetailsStepType,
  MarketingSurveyDetailsType,
  MarketingSurveyType,
} from 'app/crmMarketingSurveyDetails/MarketingSurveyDetails.types';
import { SurveyCategory, SurveyItem, SurveyType } from 'app/crmRelationsDetails/marketingSurvey/MarketingSurvey.types';

export const MARKETING_SURVEYS: SurveyItem[] = [
  {
    id: '0001',
    name: 'Interest property residential',
    sent: new Date().toISOString(),
    completed: new Date().toISOString(),
    category: SurveyCategory.Nps,
    type: SurveyType.Branding,
    score: 8,
  },
  {
    id: '0002',
    name: 'Seller residential',
    sent: new Date().toISOString(),
    completed: new Date().toISOString(),
    category: SurveyCategory.Nps,
    type: SurveyType.Branding,
    score: 9,
  },
  {
    id: '0003',
    name: 'Interest Project Living in the green',
    sent: new Date().toISOString(),
    completed: new Date().toISOString(),
    category: SurveyCategory.Nps,
    type: SurveyType.Branding,
    score: 7,
  },
  {
    id: '0004',
    name: 'Interst Project Green Day',
    sent: new Date().toISOString(),
    completed: new Date().toISOString(),
    category: SurveyCategory.Nps,
    type: SurveyType.Branding,
    score: 6,
  },
];

export const MARKETING_SURVEY_DETAIL_STEPS: MarketingSurveyDetailsType = {
  id: '0001',
  name: 'Name enquete',
  steps: [
    {
      id: '0001',
      title: 'General',
      type: MarketingSurveyDetailsStepType.General,
      surveyType: MarketingSurveyType.Rent,
      score: 8,
      approved: 12,
      declined: 0,
      modifiedAt: new Date().toLocaleString(),
    },
    {
      id: '0002',
      title: 'Group 1',
      type: MarketingSurveyDetailsStepType.Branding,
      recommendation: 9,
      score: 10,
      approved: 12,
      declined: 0,
      modifiedAt: new Date().toLocaleString(),
    },
  ],
};
