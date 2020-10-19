import { ModalContainerProps } from 'ui/molecules/modal/Modal.types';
import { PromiseFunction } from 'app/shared/types';
import { ContactSocialMediaType } from 'api/types';

export type AddNewSocialMediaModalProps = ModalContainerProps & { onSubmit: PromiseFunction<AddNewSocialMediaBody> };

export type AddNewSocialMediaBody = {
  socialMediaType: ContactSocialMediaType;
};
