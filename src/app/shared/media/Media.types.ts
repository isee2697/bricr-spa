import { PimMedia, Sort, NcpMedia } from 'api/types';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { SortOption } from 'ui/molecules/list/List.types';

export type MediaProps = PimDetailsSectionProps & {
  media: PimMedia | NcpMedia;
  description: string;
  onDescriptionUpdate(values: unknown): Promise<undefined | { error: boolean }>;
  sorting: {
    sortOptions: SortOption[];
    onSort: (key: string) => void;
  };
  sortQuery: Sort;
};
