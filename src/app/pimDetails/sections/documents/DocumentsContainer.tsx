import React from 'react';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

import { Documents } from './Documents';

export const DocumentsContainer = (props: PimDetailsSectionProps) => {
  return <Documents {...props} />;
};
