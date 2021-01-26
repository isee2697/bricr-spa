import { ReactElement } from 'react';

import { Sales } from 'api/types';

export type QuotationItemProps = {
  item: Sales;
  checked: boolean;
  checkbox: ReactElement;
};
