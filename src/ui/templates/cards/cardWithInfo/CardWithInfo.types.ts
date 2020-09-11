import { CardProps } from '@material-ui/core';

export type CardWithInfoProps = CardProps & {
  emptyTextFirst?: string;
  emptyTextSecond?: string;
  emptyEmoji?: string;
  infoTextFirst: string;
  infoTextSecond?: string;
  infoEmoji: string;
  isEmpty?: boolean;
  cardTitle: string;
};
