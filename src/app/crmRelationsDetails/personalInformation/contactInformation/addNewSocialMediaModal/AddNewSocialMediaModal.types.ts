import { SocialMediaType } from '../socialMedia/SocialMedia.types';
import { ModalContainerProps } from 'ui/molecules/modal/Modal.types';
import { PromiseFunction } from 'app/shared/types';

export type AddNewSocialMediaModalProps = ModalContainerProps & { onSubmit: PromiseFunction<AddNewSocialMediaBody> };

export type AddNewSocialMediaBody = {
  socialMediaType: SocialMediaType;
};
