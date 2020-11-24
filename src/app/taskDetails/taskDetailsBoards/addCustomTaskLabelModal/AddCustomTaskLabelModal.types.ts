import { LabelInput, LabelProperty } from 'api/types';
import { IconSelectedTheme } from 'ui/molecules/iconPicker/IconPicker.types';

export type AddCustomTaskLabelModalContainerProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  property: LabelProperty;
  iconPickerSelectedTheme?: IconSelectedTheme;
  placeholderId?: string;
  addText?: string;
};

export type AddCustomTaskLabelModalProps = Omit<AddCustomTaskLabelModalContainerProps, 'property'> & {
  onSubmit: (input: Pick<LabelInput, 'text' | 'icon'>) => {};
};

export enum AddCustomTaskLabelModalTab {
  Icon = 0,
  Colour = 1,
}
