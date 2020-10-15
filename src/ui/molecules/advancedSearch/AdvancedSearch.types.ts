import { AutocompleteProps } from '@material-ui/lab/Autocomplete';
import { ReactNode } from 'react';

import { Scalars } from '../../../api/types';

export type AdvancedSearch = {
  key: Scalars['ID'];
  title: string;
  icon: ReactNode;
};

interface AdvancedSearchPropsInterface<T> extends Partial<AutocompleteProps<T>> {
  label?: string;
  options: T[];
  hasFocus?: boolean;
  setFocus?: (value: boolean) => void;
  inputItem?: AdvancedSearch;
  onChange?: (value: string) => void;
}

export type AdvancedSearchProps = AdvancedSearchPropsInterface<AdvancedSearch>;
