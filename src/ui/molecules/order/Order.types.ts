import * as React from 'react';

export type OrderProps = {
  labels: string[];
  price: number;
  packages: number | string;
  image: string;
  onClick: (id: string) => void;
  children: React.ReactNode;
  id: string;
};
