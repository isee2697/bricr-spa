import { CrmContactInformation, CrmSocialMedia } from 'api/types';

export type SocialMediaProps = {
  data: CrmContactInformation;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};

export type SocialMediaItem = CrmSocialMedia & {
  key: string;
};
