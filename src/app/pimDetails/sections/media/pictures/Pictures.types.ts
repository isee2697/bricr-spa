import { Maybe, Picture } from 'api/types';
import { SortOption } from 'ui/molecules/list/List.types';

export type PictureProps = {
  pictures: Picture[];
  sortOptions: SortOption[];
};

export type PictureContainerProps = {
  pictures?: Maybe<Picture[]>;
};
