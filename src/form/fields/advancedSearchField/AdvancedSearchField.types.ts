import { FieldValidator } from 'final-form';
import { PropTypes } from '@material-ui/core';
import { ReactText } from 'react';

import { AdvancedSearchProps } from 'ui/molecules/advancedSearch/AdvancedSearch.types';

export type AdvancedSearchFieldProps = Pick<
  AdvancedSearchProps,
  'items' | 'placeholder' | 'disabled' | 'align' | 'classes'
> & {
  label?: string;
  name: string;
  validate?: FieldValidator<string>[];
  validateFields?: string[];
  margin?: PropTypes.Margin;
  searchEnabled?: boolean;
  disableForm?: boolean;
  onChange?: (value: ReactText) => void;
};
