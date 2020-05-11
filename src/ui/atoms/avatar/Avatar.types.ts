import { AvatarProps as DefaultAvatarProps } from '@material-ui/core/Avatar';

export type AvatarSize = undefined | 'small' | 'medium' | 'large';
export type AvatarProps = DefaultAvatarProps & {
  bgcolor?: string;
  size?: AvatarSize;
};
