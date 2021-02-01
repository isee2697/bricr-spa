import React from 'react';

import { CreateNewMatchProfile } from './CreateNewMatchProfile';
import { CreateNewMatchProfileContainerProps } from './CreateNewMatchProfile.types';

export const CreateNewMatchProfileContainer = (props: CreateNewMatchProfileContainerProps) => {
  return <CreateNewMatchProfile {...props} />;
};
