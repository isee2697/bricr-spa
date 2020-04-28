import * as React from 'react';

export type OrderProps = {
  labels: string[];
  price: number;
  packages: number | string;
  image: string;
  onClick: () => void;
  children: React.ReactNode;
};
