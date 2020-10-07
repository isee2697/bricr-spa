import { FieldValidator } from 'final-form';

import { QuantityInputProps } from 'ui/molecules/quantityInput/QuantityInput.types';

type FieldValue = string | number;

export type QuantityFieldProps = Omit<QuantityInputProps, 'value' | 'onChange'> & {
  name: string;
  validate?: FieldValidator<FieldValue>[];
  validateFields?: string[];
};
