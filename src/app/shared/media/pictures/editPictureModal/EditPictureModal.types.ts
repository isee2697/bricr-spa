import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';
import { Picture } from 'api/types';

export type EditPictureModalContainerProps = {
  isModalOpened: boolean;
  onModalClose: VoidFunction;
  picture: Picture;
};

export type EditPictureModalProps = EditPictureModalContainerProps & {
  initialValues: EditPictureForm;
  options: RadioDataType[];
  onSubmit: (values: EditPictureForm) => Promise<undefined | { error: boolean }>;
};

export type EditPictureForm = Picture & { signedUrl?: string };
