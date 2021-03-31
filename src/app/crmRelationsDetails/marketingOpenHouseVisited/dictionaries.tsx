import React from 'react';

import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';
import { ThumbDownIcon, ThumbUpIcon } from 'ui/atoms/icons';
import { YesNo } from '../marketingOpenHouse/MarketingOpenHouse.types';

export const YesNoOptions: RadioDataType[] = [
  {
    label: YesNo.Yes,
    value: YesNo.Yes,
    icon: <ThumbUpIcon />,
  },
  {
    label: YesNo.No,
    value: YesNo.No,
    icon: <ThumbDownIcon />,
  },
];
