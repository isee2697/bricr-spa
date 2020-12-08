import { ReactElement } from 'react';

import { FormSectionBaseProps } from 'ui/organisms/formSection/FormSection.types';
import { AutosaveProps } from 'ui/organisms/autosaveForm/AutosaveForm.types';

type RenderChildren<T> = (isEditing: boolean) => ReactElement;

export type BaseCardAutosave = {
  id: string;
};

export type AutosaveCardProps<T extends BaseCardAutosave> = FormSectionBaseProps & {
  data: T;
  onSave: AutosaveProps['onSave'];
  renderChildren: RenderChildren<T>;
};
