import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';
import { Maybe, MediaLink, UpdateMediaLinkInput } from 'api/types';

export type LinksProps = {
  options: RadioDataType[];
  onAdd: () => Promise<undefined | { error: boolean }>;
  onSave: (values: UpdateMediaLinkInput) => Promise<undefined | { error: boolean }>;
  links: MediaLink[];
};

export type LinksContainerProps = {
  links?: Maybe<MediaLink[]>;
};
