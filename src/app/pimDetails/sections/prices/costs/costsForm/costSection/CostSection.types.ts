import React from 'react';

import { DropdownItem } from 'ui/atoms/dropdown/Dropdown.types';

export type CostSectionProps = {
  title: string;
  subtitle: string;
  costLabel: string | React.ReactNode;
  costName: string;
  selectLabelId: string;
  selectName: string;
  options: DropdownItem[];
  disabled: boolean;
};
