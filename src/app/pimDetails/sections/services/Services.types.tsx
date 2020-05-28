import { Pim } from 'api/types';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

export type ServicesProps = PimDetailsSectionProps & {
  pim: Pim;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};

export type ServicesMetersProps = PimDetailsSectionProps & {
  pim: Pim;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
  type: 'gas' | 'water' | 'electricity';
};
export type ServiceTypes = 'hotWater' | 'heating' | 'additional';

export type ServiceTypeListProps<T> = {
  emptyEmoji: string;
  title: string;
  items: T[];
  type: ServiceTypes;
};
