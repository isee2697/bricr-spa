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

export type ServiceTypeListProps<T> = {
  emptyTitle: string;
  emptyDescription: string;
  emptyEmoji: string;
  title: string;
  items: T[];
};
