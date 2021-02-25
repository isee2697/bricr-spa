import { ReactNode } from 'react';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { AnyObject } from 'final-form';

import { FilterButtonProps } from 'app/crm/filters/Filters.types';
import { ActionTabsProps } from 'ui/molecules/actionTabs/ActionTabs.types';
import { ListProps } from 'ui/molecules/list/List.types';

export type ListView<T> = {
  renderViewComponent: (item: T) => JSX.Element;
  viewIcon: ReactNode;
  isActive?: boolean;
};

export type PageWithListsCardProps<T, D> = {
  header: PageWithListsHeaderProps;
  card: {
    titleId: string;
  };
  views: ListView<T>[];
  filters?: FilterButtonProps;
  actionTabs: ActionTabsProps<D>;
  list: Omit<ListProps<T>, 'renderItem'>;
};

export type PageWithListsHeaderProps = {
  titleId: string;
  onAdd?: VoidFunction;
  addButtonTextId?: string;
  hideAddButton?: boolean;
  buttons?: ReactNode;
};
