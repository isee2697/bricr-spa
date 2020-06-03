import { ReactNode } from 'react';

import { PimDetailsSectionProps } from '../PimDetails.types';

export type PimDetailsHeaderProps = PimDetailsSectionProps & {
  action?: ReactNode;
};
