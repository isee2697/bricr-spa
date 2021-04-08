import React from 'react';

import { DMS_SURVEY_ITEMS } from 'api/mocks/dms-surveys';

import { Surveys } from './Surveys';

export const SurveysContainer = () => {
  const data = DMS_SURVEY_ITEMS;

  return <Surveys surveys={data} />;
};
