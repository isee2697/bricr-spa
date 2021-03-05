import { ReactNode } from 'react';

export type ProfileItemProps = {
  name: string;
  avatar: string;
  phone?: string;
  email?: string;
  notes?: string;
  teamNames?: string[];
  rights?: string[];
  functionDescription?: string;
  button?: ReactNode;
  onClick?: VoidFunction;
  inActive?: boolean;
  classes?: ProfileItemClasses;
  hideMenuButton?: boolean;
};

export type ProfileItemClasses = {
  avatar?: string;
};
