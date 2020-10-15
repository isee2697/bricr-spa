import { PimDetailsSectionProps } from '../../../PimDetails.types';
import { PimSummary } from '../Summary.types';
import { RoofInformation } from 'api/types';

export type SummaryOutsideContainerProps = PimDetailsSectionProps & {
  summary: PimSummary;
};

export type SummaryOutsideProps = PimDetailsSectionProps & {
  summary: PimSummary;
};
