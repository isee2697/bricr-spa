import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { PimSummary } from '../Summary.types';

export type SignsAndKeyProps = PimDetailsSectionProps & {
  summary: PimSummary;
};
