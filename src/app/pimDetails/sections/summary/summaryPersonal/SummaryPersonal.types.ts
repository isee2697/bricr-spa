import { PimDetailsSectionProps } from '../../../PimDetails.types';

export type PimSummaryPersonal = {
  address: string;
  image: string;
};

export type SummaryPersonalProps = PimDetailsSectionProps & {
  summaryPersonal: PimSummaryPersonal;
};
