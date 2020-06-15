import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { Investment, InvestmentInput } from 'api/types';

export type InvestmentsProps = PimDetailsSectionProps & {
  onSave: (values: InvestmentForm) => Promise<undefined | { error: boolean }>;
  investment: Investment | null;
};

export type InvestmentsContainerProps = PimDetailsSectionProps & {
  investment: Investment | null;
};

export type InvestmentForm = InvestmentInput & {
  averageVacancyPercentage?: string;
  numberOfRentableUnits?: string;
  amountOfTenants?: string;
  remainingTermContacts?: string;
  vacancySquareMeters?: string;
};
