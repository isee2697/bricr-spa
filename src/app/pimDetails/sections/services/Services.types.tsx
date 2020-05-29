import { ReactNode } from 'react';

import { Pim } from 'api/types';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';
export type ServicesProps = PimDetailsSectionProps & {
  pim: Pim;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};

export type ServicesMetersProps = PimDetailsSectionProps & {
  pim: Pim;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
  type: 'gas' | 'water' | 'electricity';
};

export type ServiceTypes = 'HotWater' | 'Heating' | 'Additional';

export type ServiceTypeListProps<T> = {
  emptyEmoji: string;
  title: string;
  items: T[];
  type: ServiceTypes;
};

export type ServiceFormProps<T> = {
  title: ReactNode;
  types?: ServiceRadioType[];
  typesTitle?: string;
  item: T;
  isEditMode: boolean;
  toggled: boolean;
  onToggleClick: VoidFunction;
  hasOwnership: boolean;
};

export type ServiceRadioType = RadioDataType & {
  hasOwnership?: boolean;
};
