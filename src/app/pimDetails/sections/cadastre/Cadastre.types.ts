import { Pim } from 'api/types';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

export type CadastreProps = PimDetailsSectionProps & {
  pim: Pim;
};
