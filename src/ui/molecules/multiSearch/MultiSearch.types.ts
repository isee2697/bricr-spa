import { ReactNode } from 'react';
import { AutocompleteProps } from '@material-ui/lab/Autocomplete';

export type MultiSearch = {
  title: string;
  type: string;
  subline?: string;
  date?: Date;
  icon?: ReactNode;
};

export type MultiSearchClasses = {
  root?: string;
  input?: string;
  paper?: string;
};

interface MultiSearchPropsInterface<T> extends Partial<AutocompleteProps<T>> {
  options: T[];
  value?: T[];
  hasFocus?: boolean;
  setFocus?: (value: boolean) => void;
  placeholder?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  classes?: MultiSearchClasses;
  onChange?: (value: T[]) => void;
}

export type MultiSearchProps = MultiSearchPropsInterface<MultiSearch>;
