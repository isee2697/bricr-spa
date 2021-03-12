import { ReactNode } from 'react';
import { AutocompleteProps } from '@material-ui/lab/Autocomplete';

import { Entities } from 'api/types';

export type Search = {
  title: string;
  type: string;
  subline?: string;
  date?: Date;
  icon?: ReactNode;
  onClick?: VoidFunction;
};

export type SearchClasses = {
  root?: string;
  input?: string;
  paper?: string;
};

interface SearchPropsInterface<T> extends Partial<AutocompleteProps<T>> {
  options: T[];
  hasFocus?: boolean;
  setFocus?: (value: boolean) => void;
  placeholder?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  classes?: SearchClasses;
  loading?: boolean;
}

export type SearchProps = SearchPropsInterface<Search>;
