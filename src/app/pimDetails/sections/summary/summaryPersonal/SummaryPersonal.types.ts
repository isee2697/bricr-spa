import { PimDetailsSectionProps } from '../../../PimDetails.types';
import { PimSummary } from '../Summary.types';

export type SummaryPersonalProps = PimDetailsSectionProps & {
  summary: PimSummary;
};
