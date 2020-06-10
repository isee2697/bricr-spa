import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

export type InvestmentsProps = PimDetailsSectionProps & {
  onSave: () => Promise<undefined | { error: boolean }>;
};
