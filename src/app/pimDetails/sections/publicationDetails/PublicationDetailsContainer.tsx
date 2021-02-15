import React from 'react';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

import { PublicationDetails } from './PublicationDetails';

export const PublicationDetailsContainer = (props: PimDetailsSectionProps) => {
  return <PublicationDetails {...props} />;
};
