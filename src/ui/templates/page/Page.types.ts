import { ReactNode } from 'react';
import { AnyObject } from 'react-final-form';

import { Profile } from 'api/types';
import { CardWithInfoProps } from 'ui/templates/cards/cardWithInfo/CardWithInfo.types';
import { PageHeaderProps } from 'ui/templates/page/header/PageHeader.types';
import { BaseCardListItemType, CardWithListProps } from 'ui/templates/cards/cardWithList/CardWithList.types';

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
  showHeader?: boolean;
  headerProps?: PageHeaderProps;
  headerAction?: ReactNode;
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
