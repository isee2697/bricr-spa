import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { PimPrices } from 'api/types';

export type PricesProps = PimDetailsSectionProps & {
  pricing: PimPrices;
};
