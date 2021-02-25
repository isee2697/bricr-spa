import React from 'react';

import { CrmStatus } from 'api/types';
import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';
import { SquareIcon } from 'ui/atoms/icons';

export const CrmStatusOptions: RadioDataType[] = [CrmStatus.Active, CrmStatus.Inactive].map(status => ({
  label: status,
  value: status,
  icon: <SquareIcon />,
}));
