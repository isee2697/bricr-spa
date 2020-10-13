import { PimDetailsSectionProps } from '../../../PimDetails.types';

export type PimSummaryOutside = {
  address: string;
  image: string;
};

export type SummaryOutsideProps = PimDetailsSectionProps & {
  summaryOutside: PimSummaryOutside;
};
