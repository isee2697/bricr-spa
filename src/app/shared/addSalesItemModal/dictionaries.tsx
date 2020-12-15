import React from 'react';

import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';
import { SquareIcon } from 'ui/atoms/icons';
import { SalesType } from 'api/types';

export const TypeOfOrders: RadioDataType[] = Object.keys(SalesType).map(key => ({
  label: `dictionaries.type_of_order.${key}`,
  icon: <SquareIcon />,
  value: key,
}));
