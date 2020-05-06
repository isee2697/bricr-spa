import { ReactNode } from 'react';

import { ProgressFillingProps } from 'ui/atoms/progressFillig/ProgressFilling.types';

export type PropertyItemProps = ProgressFillingProps & {
  title: string;
  image: string;
  date: string;
  labels: string[];
  discountPrice?: number;
  price: number;
  pricePerMeter: number;
  isAlert?: boolean;
  isArchived?: boolean | undefined;
  categories: ReactNode;
  children: ReactNode;
  onMenuClick: () => void;
  stage?: 0 | 1 | 2 | 3 | 4 | 5;
};
