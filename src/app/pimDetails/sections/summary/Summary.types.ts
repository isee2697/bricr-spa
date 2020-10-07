import { DateTime } from 'luxon';
import { PimDetailsSectionProps } from '../../PimDetails.types';

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

export type PimSummary = {
  address: string;
  image: string;
  pricing: PimSummaryPricing;
};

export type SummaryProps = PimDetailsSectionProps & {
  summary: PimSummary;
};
