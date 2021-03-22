import { ReactElement, ReactNode } from 'react';

import { FormSectionBaseProps } from 'ui/organisms/formSection/FormSection.types';
import { AutosaveProps } from 'ui/organisms/autosaveForm/AutosaveForm.types';

type RenderItem<T> = (item: T, isEditing: boolean) => ReactElement;

export type BaseCardListItemType = {
  name?: string;
  title?: string;
  id: string;
};

export type CardWithListProps<T extends BaseCardListItemType> = FormSectionBaseProps & {
  emptyStateTextFirst: string;
  emptyStateTextSecond?: string;
  emoji: string;
  renderItem: RenderItem<T>;
  items: T[];
  onSave: AutosaveProps['onSave'];
  renderSubOptions?: (data: T) => ReactNode;
  renderGenericFields?: (ediiting: boolean) => ReactNode;
};
