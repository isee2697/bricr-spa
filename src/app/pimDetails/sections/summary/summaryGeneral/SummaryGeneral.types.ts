import { DateTime } from 'luxon';
import { PimDetailsSectionProps } from '../../../PimDetails.types';
import { PimSummary } from '../Summary.types';

export type SummaryGeneralContainerProps = PimDetailsSectionProps & {
  summary: PimSummary;
};

export enum PricingAcceptance {
  InConstruction = 'in_construction',
}

export enum PricingPaymentsFrequency {
  PerYear = 'per_year',
}

export type PimSummaryPricing = {
  askingPrice: number;
  acceptance: PricingAcceptance;
  perDate: DateTime;
  wozValue: number;
  referenceDate: DateTime;
  realEstateTaxUser: number;
  realEstateTaxUserPaymentsFrequency: PricingPaymentsFrequency.PerYear;
  realEstateTaxBusiness: number;
  realEstateTaxBusinessPaymentsFrequency: PricingPaymentsFrequency.PerYear;
};

export type SummaryGeneralProps = PimDetailsSectionProps & {
  summary: PimSummary;
};
