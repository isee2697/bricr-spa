import React, { ReactElement, useState } from 'react';
import clsx from 'classnames';
import { AnyObject } from 'final-form';
import { useHistory } from 'react-router-dom';

import { PageWithListsHeader } from 'ui/templates/page/PageWithListsCard/PageWithListsHeader';
import { Box, Grid, IconButton } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';
import { useStyles } from 'ui/templates/page/PageWithListsCard/PageWithListsCard.styles';
import { FiltersButton } from 'ui/molecules/filters/FiltersButton';
import { ActiveFilters, hasActiveFilters } from 'ui/molecules/filters/activeFilters/ActiveFilters';
import { ActionTabs, List } from 'ui/molecules';
import { BaseListType } from 'ui/molecules/list/List.types';

import { PageWithListsCardProps } from './PageWithListsCard.types';
type test<T> = (data: T) => boolean;
export const PageWithListsCard: <V, A, F>(
  p: PageWithListsCardProps<V, A, F>,
) => ReactElement<PageWithListsCardProps<V, A, F>> = ({
  header,
  card,
  views,
  filters,
  actionTabs,
  list,
  baseRoute,
}) => {
  const [activeView, setActiveView] = useState(views.findIndex(view => view.isActive) ?? 0);
  const { push } = useHistory();
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const buttons = views.map((view, key) => {
    return (
      <IconButton
        className={key === activeView ? classes.activeList : undefined}
        key={key}
        onClick={() => setActiveView(key)}
        variant="rounded"
        size="small"
      >
        {view.viewIcon}
      </IconButton>
    );
  });

  const handleFilterChange = (newFilters: AnyObject) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    filters?.onDelete(newFilters);
  };

  return (
    <Grid xs={12}>
      <PageWithListsHeader {...header} />
      <FormSection
        buttons={
          <>
            {buttons}
            {filters && (
              <FiltersButton
                color="primary"
                data={filters.activeFilters}
                filters={filters.availableFilters}
                getActiveFilters={handleFilterChange}
              />
            )}
          </>
        }
        title={formatMessage({ id: card.titleId })}
        isEditable={false}
      >
        <ActionTabs {...actionTabs} />
        {filters && hasActiveFilters(filters?.activeFilters) && (
          <ActiveFilters className={classes.filters} {...filters} />
        )}
        <List
          {...list}
          className={clsx(list.className, views[activeView]?.hasEvenOddBackground && classes.evenOddBackground)}
          renderItem={(item, checked, checkbox) => {
            const baseItem = (item as unknown) as BaseListType;

            return (
              <Box key={baseItem.id} className={clsx(classes.row, { [classes.rowChecked]: checked }, 'list-row')}>
                {checkbox}
                <Box
                  className={classes.rowItem}
                  onClick={() => baseRoute && push(baseRoute.replace(':id', baseItem.id))}
                >
                  {views[activeView].renderViewComponent(item)}
                </Box>
              </Box>
            );
          }}
        />
      </FormSection>
    </Grid>
  );
};
