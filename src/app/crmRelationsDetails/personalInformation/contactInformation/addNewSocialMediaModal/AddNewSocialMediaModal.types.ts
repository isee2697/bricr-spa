import { SocialMediaType } from '../socialMedia/SocialMedia.types';

export type AddNewSocialMediaModalProps = {
  onSubmit: AddNewSocialMediaSubmit;
  isOpen: boolean;
};

export type AddNewSocialMediaSubmit<T = AddNewSocialMediaBody> = (
  body: T,
) => Promise<undefined | { error: 'conflict' | 'unknown'; conflictsCount?: number }>;

export type AddNewSocialMediaBody = {
  socialMediaType: SocialMediaType;
};
