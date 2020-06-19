import { PimGeneral } from 'api/types';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

export type GeneralFormProps = {
  pimGeneral: PimGeneral;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};

export type GeneralProps = PimDetailsSectionProps & GeneralFormProps;
