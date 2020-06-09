import { Picture } from 'app/pimDetails/sections/media/pictures/Pictures.types';
import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';

export type EditPictureModalContainerProps = {
  isModalOpened: boolean;
  onModalClose: VoidFunction;
  picture: Picture;
};

export type EditPictureModalProps = EditPictureModalContainerProps & {
  initialValues: object;
  options: RadioDataType[];
  onSubmit: VoidFunction;
};
