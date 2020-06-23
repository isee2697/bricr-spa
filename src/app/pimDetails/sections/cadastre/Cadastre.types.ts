import { PimCadastreQuery } from 'api/types';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

export type CadastreProps = PimDetailsSectionProps & {
  data?: PimCadastreQuery;
};
