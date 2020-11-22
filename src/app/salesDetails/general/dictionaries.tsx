import React from 'react';

import { SquareIcon } from 'ui/atoms/icons';
import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';

export const SalesStatus: RadioDataType[] = [
  {
    label: 'dictionaries.sales_status.acquisition',
    icon: <SquareIcon />,
    value: 'acquisition',
  },
  {
    label: 'dictionaries.sales_status.quotation',
    icon: <SquareIcon />,
    value: 'quotation',
  },
  {
    label: 'dictionaries.sales_status.order',
    icon: <SquareIcon />,
    value: 'order',
  },
  {
    label: 'dictionaries.sales_status.complete',
    icon: <SquareIcon />,
    value: 'complete',
  },
  {
    label: 'dictionaries.sales_status.withdraw',
    icon: <SquareIcon />,
    value: 'withdraw',
  },
];

export const SalesType: RadioDataType[] = [
  {
    label: 'dictionaries.sales_status.house_for_sale',
    icon: <SquareIcon />,
    value: 'houseForSale',
  },
  {
    label: 'dictionaries.sales_status.house_for_rent',
    icon: <SquareIcon />,
    value: 'houseForRent',
  },
  {
    label: 'dictionaries.sales_status.bog_for_sale',
    icon: <SquareIcon />,
    value: 'bogForSale',
  },
  {
    label: 'dictionaries.sales_status.appraisal',
    icon: <SquareIcon />,
    value: 'appraisal',
  },
];

export const PackageType: RadioDataType[] = [
  {
    label: 'dictionaries.type_of_package.package_1',
    icon: <SquareIcon />,
    value: 'package1',
  },
  {
    label: 'dictionaries.type_of_package.package_2',
    icon: <SquareIcon />,
    value: 'package2',
  },
  {
    label: 'dictionaries.type_of_package.package_3',
    icon: <SquareIcon />,
    value: 'package3',
  },
  {
    label: 'dictionaries.type_of_package.package_4',
    icon: <SquareIcon />,
    value: 'package4',
  },
  {
    label: 'dictionaries.type_of_package.package_5',
    icon: <SquareIcon />,
    value: 'package5',
  },
  {
    label: 'dictionaries.type_of_package.package_6',
    icon: <SquareIcon />,
    value: 'package6',
  },
  {
    label: 'dictionaries.type_of_package.package_7',
    icon: <SquareIcon />,
    value: 'package7',
  },
];
