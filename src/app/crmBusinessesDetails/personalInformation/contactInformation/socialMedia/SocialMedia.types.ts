import { CrmSocialMedia } from 'api/types';

export type SocialMediaProps = {
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};

export type SocialMediaItem = CrmSocialMedia & {
  key: string;
};
