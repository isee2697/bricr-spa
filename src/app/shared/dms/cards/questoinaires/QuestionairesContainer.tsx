import React from 'react';

import { DMS_QUESTIONAIRE_ITEMS } from 'api/mocks/dms-questionaire';

import { Questionaires } from './Questionaires';

export const QuestionairesContainer = () => {
  const data = DMS_QUESTIONAIRE_ITEMS;

  return <Questionaires questionaires={data} />;
};
