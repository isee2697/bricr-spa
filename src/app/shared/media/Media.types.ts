import { PimMedia, Sort } from 'api/types';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { SortOption } from 'ui/molecules/list/List.types';
import { PimType } from '../pimType';

export type MediaContainerProps = PimDetailsSectionProps & {
  pimType: PimType;
};

export type MediaProps = PimDetailsSectionProps & {
  media: PimMedia;
  onDescriptionUpdate(values: unknown): Promise<undefined | { error: boolean }>;
  description: string;
  sorting: {
    sortOptions: SortOption[];
    onSort: (key: string) => void;
  };
  sortQuery: Sort;
};
