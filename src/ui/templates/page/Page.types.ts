import { ReactNode } from 'react';
import { AnyObject } from 'react-final-form';

import { Profile } from 'api/types';
import { CardWithInfoProps } from 'ui/templates/cards/cardWithInfo/CardWithInfo.types';

type BasePageProps = {
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
  titleActions?: ReactNode;
};
export type PageProps = BasePageProps & {
  children: ReactNode;
};

export type InfoPageProps = BasePageProps &
  CardWithInfoProps & {
    children?: ReactNode;
  };
