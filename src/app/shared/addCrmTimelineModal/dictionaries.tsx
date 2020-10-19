import React from 'react';

import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';
import { SquareIcon } from 'ui/atoms/icons';

import { CrmTimelineType } from './AddCrmTimelineModal.types';

export const TimelineTypes: RadioDataType[] = Object.keys(CrmTimelineType).map(key => ({
  label: `dictionaries.timeline_type.${key}`,
  icon: <SquareIcon />,
  value: key,
}));
