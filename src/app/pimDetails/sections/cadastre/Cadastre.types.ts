import { KikInfoType, PimCadastreQuery } from 'api/types';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { PromiseFunction } from 'app/shared/types';

export type CadastreProps = PimDetailsSectionProps & {
  data?: PimCadastreQuery;
  onAutofill: PromiseFunction<KikInfoType>;
};
