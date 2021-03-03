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
