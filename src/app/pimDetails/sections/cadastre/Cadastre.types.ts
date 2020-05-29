import { Pim } from 'api/types';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

export type CadastreProps = PimDetailsSectionProps & {
  pim: Pim;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
  isAddPlotSubmitting: boolean;
  onAddPlot: () => Promise<{ error: boolean } | undefined>;
};
