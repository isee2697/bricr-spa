export type SocialMediaProps = {};

export type SocialMediaItem = {
  key: SocialMediaType;
  url: string;
};

export enum SocialMediaType {
  Facebook = 'Facebook',
  LinkedIn = 'LinkedIn',
  Twitter = 'Twitter',
}
