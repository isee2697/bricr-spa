import React from 'react';

import { AcquisitionsContainerProps } from './Acquisitions.types';
import { Acquisitions } from './Acquisitions';

export const AcquisitionsContainer = (props: AcquisitionsContainerProps) => {
  return <Acquisitions {...props} />;
};
