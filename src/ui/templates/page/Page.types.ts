import { ReactNode } from 'react';
import { AnyObject } from 'react-final-form';

import { LastUpdatedProfile } from 'api/types';
import { CardWithInfoProps } from 'ui/templates/cards/cardWithInfo/CardWithInfo.types';
import { PageHeaderProps } from 'ui/templates/page/header/PageHeader.types';
import { BaseCardListItemType, CardWithListProps } from 'ui/templates/cards/cardWithList/CardWithList.types';

export type BasePageProps = {
  title?: string | ReactNode;
  onSave?(values: unknown): Promise<undefined | { error: boolean }>;
  initialValues?: AnyObject;
  name?: string;
  placeholder?: string;
  dateUpdated?: string | null;
  updatedBy?: LastUpdatedProfile | null;
  withoutHeader?: boolean;
  afterTitle?: ReactNode;
  hideBreadcrumb?: boolean;
  titleActions?: ReactNode;
  showHeader?: boolean;
  headerProps?: PageHeaderProps;
  headerAction?: ReactNode;
  classes?: PageClasses;
};

export type PageClasses = {
  container: string;
};

export type PageProps = BasePageProps & {
  children: ReactNode;
};

export type InfoPageProps = BasePageProps &
  CardWithInfoProps & {
    children?: ReactNode;
  };

export type PageWithListProps<T extends BaseCardListItemType> = BasePageProps &
  CardWithListProps<T> & {
    cardTitle: string;
  };
