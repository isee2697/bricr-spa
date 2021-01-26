import React from 'react';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

import { Publication } from './Publication';

export const PublicationContainer = (props: PimDetailsSectionProps) => {
  return <Publication {...props} />;
};
