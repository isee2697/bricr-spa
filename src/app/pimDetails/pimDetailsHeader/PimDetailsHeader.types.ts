import { ReactNode } from 'react';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

export type PimDetailsHeaderProps = PimDetailsSectionProps & {
  action?: ReactNode;
};
