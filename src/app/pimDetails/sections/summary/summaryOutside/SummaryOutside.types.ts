import { PimDetailsSectionProps } from '../../../PimDetails.types';
import { PimSummary } from '../Summary.types';

export type SummaryOutsideProps = PimDetailsSectionProps & {
  summary: PimSummary;
};
