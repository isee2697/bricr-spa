import { File } from 'api/types';
import { SortOption } from 'ui/molecules/list/List.types';

export type PictureProps = {
  pictures: Picture[];
  sortOptions: SortOption[];
};

export type Picture = {
  image: File;
  title: string;
  description: string;
  type: string;
};
