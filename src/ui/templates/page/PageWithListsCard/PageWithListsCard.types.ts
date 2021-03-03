import { ReactNode } from 'react';

import { ActionTabsProps } from 'ui/molecules/actionTabs/ActionTabs.types';
import { ListProps } from 'ui/molecules/list/List.types';
import { ActiveFiltersProps } from 'ui/molecules/filters/activeFilters/ActiveFilters';
import { FiltersTypes } from 'ui/molecules/filters/Filters.types';
import { AppRoute } from 'routing/AppRoute.enum';
import { ListOptionsMenuProps } from 'ui/molecules/listOptionsMenu/ListOptionsMenu.types';
import { ListTableCell } from 'ui/molecules/listTableItem/ListTableItem.types';
import { HeaderColumnItemType } from 'ui/molecules/columnModal/ColumnModal.types';

export type ListView<T> = {
  renderViewComponent: (item: T) => JSX.Element;
  viewIcon: ReactNode;
  isActive?: boolean;
  isTable?: boolean;
};

export type PageWithListsCardProps<V, A, F> = {
  withoutHeader?: boolean;
  header: PageWithListsHeaderProps;
  cardTitleId?: string;
  baseRoute?: AppRoute | string;
  isLoading: boolean;
  views: ListView<V>[];
  filters?: ActiveFiltersProps<F> & {
    availableFilters: FiltersTypes[];
  };
  actionTabs?: ActionTabsProps<A>;
  list: Omit<ListProps<V>, 'renderItem' | 'listIndexHeader' | 'loading' | 'loadingItem'>;
  tableHeader?: {
    cells: ListTableCell<V>[];
    columns?: HeaderColumnItemType<V>[];
    setColumns?: (column: HeaderColumnItemType<V>[]) => void;
    sortKey: keyof V;
  };
  optionsMenu: Omit<ListOptionsMenuProps, 'onDeleteClick' | 'onEditClick' | 'children'> & {
    onDelete?: (item: V) => void;
    onEdit?: (item: V) => void;
    renderChildren?: (item: V) => ReactNode;
  };
};

export type PageWithListsHeaderProps = {
  titleId: string;
  onAdd?: VoidFunction;
  addButtonTextId?: string;
  hideAddButton?: boolean;
  buttons?: ReactNode;
};
