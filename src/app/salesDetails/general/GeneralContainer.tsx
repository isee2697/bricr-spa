import React from 'react';

import { General } from './General';
import { GeneralContainerProps } from './General.types';

export const GeneralContainer = (props: GeneralContainerProps) => {
  return <General {...props} />;
};
