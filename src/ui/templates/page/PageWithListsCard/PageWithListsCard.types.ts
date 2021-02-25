import { ReactNode } from 'react';

import { ActionTabsProps } from 'ui/molecules/actionTabs/ActionTabs.types';
import { ListProps } from 'ui/molecules/list/List.types';
import { ActiveFiltersProps } from 'ui/molecules/filters/activeFilters/ActiveFilters';
import { FiltersTypes } from 'ui/molecules/filters/Filters.types';
import { AppRoute } from 'routing/AppRoute.enum';

export type ListView<T> = {
  renderViewComponent: (item: T) => JSX.Element;
  viewIcon: ReactNode;
  isActive?: boolean;
  hasEvenOddBackground?: boolean;
};

export type PageWithListsCardProps<V, A, F> = {
  header: PageWithListsHeaderProps;
  baseRoute?: AppRoute | string;
  card: {
    titleId: string;
  };
  views: ListView<V>[];
  filters?: ActiveFiltersProps<F> & {
    availableFilters: FiltersTypes[];
  };
  actionTabs: ActionTabsProps<A>;
  list: Omit<ListProps<V>, 'renderItem'>;
};

export type PageWithListsHeaderProps = {
  titleId: string;
  onAdd?: VoidFunction;
  addButtonTextId?: string;
  hideAddButton?: boolean;
  buttons?: ReactNode;
};
