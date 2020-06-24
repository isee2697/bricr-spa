import { ReactNode } from 'react';
import { AnyObject } from 'react-final-form';

import { LastEditedBy } from 'ui/atoms/lastUpdated/LastUpdated.types';

export type PageProps = {
  children: ReactNode;
  title?: string;
  onSave?(values: unknown): Promise<undefined | { error: boolean }>;
  initialValues?: AnyObject;
  name?: string;
  placeholder?: string;
  dateUpdated?: string | null;
  updatedBy?: LastEditedBy | null;
  withoutHeader?: boolean;
  afterTitle?: ReactNode;
};
