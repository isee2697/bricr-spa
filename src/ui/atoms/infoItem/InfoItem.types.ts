import { GridProps } from '@material-ui/core';

export type InfoItemProps = GridProps & {
  amount: number;
  labelId: string;
  color?: 'red' | 'green' | 'orange';
};
