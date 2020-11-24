import React from 'react';

import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';
import { SquareIcon } from 'ui/atoms/icons';

import { SalesOrderType } from './AddSalesItemModal.types';

export const TypeOfOrders: RadioDataType[] = Object.keys(SalesOrderType).map(key => ({
  label: `dictionaries.type_of_order.${key}`,
  icon: <SquareIcon />,
  value: key,
}));
