import { ReactNode } from 'react';
import { AnyObject } from 'react-final-form';

import { Profile } from 'api/types';

export type PageProps = {
  children: ReactNode;
  title?: string;
  onSave?(values: unknown): Promise<undefined | { error: boolean }>;
  initialValues?: AnyObject;
  name?: string;
  placeholder?: string;
  dateUpdated?: string | null;
  updatedBy?: Profile | null;
  withoutHeader?: boolean;
  afterTitle?: ReactNode;
  hideBreadcrumb?: boolean;
};
