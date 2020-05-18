import { Pim } from 'api/types';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

export type GeneralFormProps = {
  pim: Pim;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};

export type GeneralProps = PimDetailsSectionProps & GeneralFormProps;
