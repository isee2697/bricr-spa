import React from 'react';

import { EmailSettings } from './Settings';
import { EmailSettingsContainerProps } from './Settings.types';

export const EmailSettingsContainer = (props: EmailSettingsContainerProps) => {
  return <EmailSettings {...props} />;
};
