import React from 'react';

import { CalendarSettings } from './Settings';
import { CalendarSettingsContainerProps } from './Settings.types';

export const CalendarSettingsContainer = (props: CalendarSettingsContainerProps) => {
  return <CalendarSettings {...props} />;
};
