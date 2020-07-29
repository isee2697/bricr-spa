import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';
import { Maybe, Tag, UpdateTagInput } from 'api/types';

export type TagsProps = {
  options: RadioDataType[];
  onAdd: () => Promise<undefined | { error: boolean }>;
  onSave: (values: UpdateTagInput) => Promise<undefined | { error: boolean }>;
  tags: Tag[];
  newTagId?: string;
  onAddCustomType: () => void;
};

export type TagsContainerProps = {
  tags?: Maybe<Tag[]>;
  onAddCustomType: () => void;
};
