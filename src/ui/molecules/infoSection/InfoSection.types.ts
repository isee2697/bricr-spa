import { ReactNode } from 'react';

export type InfoSectionProps = {
  children: React.ReactNode;
  emoji?: string | ReactNode;
  className?: string;
  emojiClassName?: string;
  color?: 'default' | 'gradient';
  noPadding?: boolean;
};
