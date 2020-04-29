import { AvatarProps } from '../avatar/Avatar.types';

export type UserAvatarProps = Omit<AvatarProps, 'src'> & {
  name: string;
  avatar?: string;
};
