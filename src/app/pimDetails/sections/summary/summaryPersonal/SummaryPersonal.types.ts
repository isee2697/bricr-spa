import { PimDetailsSectionProps } from '../../../PimDetails.types';
import { PimSummary } from '../Summary.types';

export type SummaryPersonalContainerProps = PimDetailsSectionProps & {
  summary: PimSummary;
};

export type PimSummaryPersonal = {
  address: string;
  image?: string;
};

export type SummaryPersonalProps = PimDetailsSectionProps & {
  summaryPersonal: PimSummaryPersonal;
};
