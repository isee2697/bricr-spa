import { ReactNode } from 'react';
import { AutocompleteProps } from '@material-ui/lab/Autocomplete';

export type Search = {
  title: string;
  type: string;
  subline?: string;
  date?: Date;
  icon?: ReactNode;
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
}

export type SearchProps = SearchPropsInterface<Search>;
