import { LabelInput, LabelProperty } from 'api/types';
import { EntityType } from 'app/shared/entityType';
import { IconSelectedTheme } from 'ui/molecules/iconPicker/IconPicker.types';

export type AddCustomTaskModalContainerProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  property: LabelProperty;
  title?: string;
  labelId?: string;
  entityType?: EntityType;
  iconPickerSelectedTheme?: IconSelectedTheme;
  placeholderId?: string;
  addText?: string;
};

export type AddCustomTaskModalProps = Omit<AddCustomTaskModalContainerProps, 'property'> & {
  onSubmit: (input: Pick<LabelInput, 'text' | 'icon'>) => {};
};
