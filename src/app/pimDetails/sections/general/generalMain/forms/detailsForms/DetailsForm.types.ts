import { PropertyType } from 'api/types';

export type DetailsFormContainerProps = {
  type?: PropertyType | null;
  title: string;
};

export type DetailsFormProps = {
  editing: boolean;
};
