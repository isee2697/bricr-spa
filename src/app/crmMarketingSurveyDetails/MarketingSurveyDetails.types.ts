import { ReactNode } from 'react';

export type MarketingSurveyDetailsContainerProps = {
  path: string;
};

export type MarketingSurveyDetailsProps = MarketingSurveyDetailsContainerProps & {
  data: MarketingSurveyDetailsType;
  breadcrumbs: ReactNode;
};

export type MarketingSurveyDetailsType = {
  id: string;
  name: string;
  steps: MarketingSurveyDetailsStep[];
};

export type MarketingSurveyDetailsStep = {
  id: string;
  title: string;
  score: number;
  type: MarketingSurveyDetailsStepType;
  surveyType?: MarketingSurveyType;
  recommendation?: number;
  modifiedAt?: string;
  approved?: number;
  declined?: number;
};

export enum MarketingSurveyDetailsStepType {
  General = 'General',
  Branding = 'Branding',
}

export enum MarketingSurveyType {
  Sales = 'Sales',
  Rent = 'Rent',
}
