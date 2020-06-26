import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { Investment } from 'api/types';

export type InvestmentsProps = PimDetailsSectionProps & {
  onSave: (values: InvestmentForm) => Promise<undefined | { error: boolean }>;
  investment: Investment | null;
};

export type InvestmentsContainerProps = PimDetailsSectionProps & {
  investment: Investment | null;
};

export type InvestmentForm = Investment & {
  averageVacancyPercentage?: string;
  numberOfRentableUnits?: string;
  amountOfTenants?: string;
  remainingTermContacts?: string;
  vacancySquareMeters?: string;
};
