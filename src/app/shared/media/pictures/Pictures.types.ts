import { Maybe, Picture, Sort } from 'api/types';
import { SortOption } from 'ui/molecules/list/List.types';
import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';

export type PictureProps = PictureContainerProps & {
  pictures: Picture[];
  customLabels: RadioDataType[];
};

export type PictureContainerProps = {
  pictures?: Maybe<Picture[]>;
  sorting: {
    sortOptions: SortOption[];
    onSort: (key: string) => void;
  };
  sortQuery: Sort;
  mainPictureId?: string;
};
