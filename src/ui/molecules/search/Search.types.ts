import { AutocompleteProps } from '@material-ui/lab/Autocomplete';

export type Search = {
  title: string;
  type: string;
  subline?: string;
  date?: Date;
};

interface SearchPropsInterface<T> extends Partial<AutocompleteProps<T>> {
  options: T[];
}

export type SearchProps = SearchPropsInterface<Search>;
