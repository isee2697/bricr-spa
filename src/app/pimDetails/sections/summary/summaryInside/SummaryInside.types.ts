import { PimDetailsSectionProps } from '../../../PimDetails.types';

export type PimSummaryInside = {
  address: string;
  image: string;
};

export type SummaryInsideProps = PimDetailsSectionProps & {
  summaryInside: PimSummaryInside;
};
