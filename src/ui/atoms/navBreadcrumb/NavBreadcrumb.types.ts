import { ReactNode } from 'react';

export type NavBreadcrumbProps = {
  title: string | ReactNode;
  urlBase?: string;
  to?: string;
};
