import { Maybe, Picture } from 'api/types';
import { SortOption } from 'ui/molecules/list/List.types';
import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';

export type PictureProps = {
  pictures: Picture[];
  sortOptions: SortOption[];
  customLabels: RadioDataType[];
};

export type PictureContainerProps = {
  pictures?: Maybe<Picture[]>;
};
