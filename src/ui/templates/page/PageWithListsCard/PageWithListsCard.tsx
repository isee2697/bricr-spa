import React, { ReactElement, useState } from 'react';
import clsx from 'classnames';

import { PageWithListsHeader } from 'ui/templates/page/PageWithListsCard/PageWithListsHeader';
import { Box, Grid, IconButton } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';
import { useStyles } from 'ui/templates/page/PageWithListsCard/PageWithListsCard.styles';
import { FiltersButton } from 'app/crm/filters/FiltersButton';
import { ActiveFilters } from 'app/crm/filters/activeFilters/ActiveFilters';
import { ActionTabs, List } from 'ui/molecules';
import { BaseListType } from 'ui/molecules/list/List.types';

import { PageWithListsCardProps } from './PageWithListsCard.types';

export const PageWithListsCard: <T, D>(
  p: PageWithListsCardProps<T, D>,
) => ReactElement<PageWithListsCardProps<T, D>> = ({ header, card, views, filters, actionTabs, list }) => {
  const [activeView, setActiveView] = useState(views.findIndex(view => view.isActive) ?? 0);
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

  const hasFilters = () =>
    Object.values(filters?.data ?? {}).filter(item => {
      return Array.isArray(item) && !!item.length;
    }).length > 0;

  return (
    <Grid xs={12}>
      <PageWithListsHeader {...header} />
      <FormSection
        buttons={
          <>
            {buttons}
            {filters && <FiltersButton color="primary" {...filters} />}
          </>
        }
        title={formatMessage({ id: card.titleId })}
        isEditable={false}
      >
        <ActionTabs {...actionTabs} />
        {filters && hasFilters() && (
          <ActiveFilters
            className={classes.filters}
            activeFilters={filters.data!}
            onDelete={filters.getActiveFilters!}
          />
        )}
        <List
          {...list}
          renderItem={(item, checked, checkbox) => {
            const baseItem = (item as unknown) as BaseListType;

            return (
              <Box key={baseItem.id} className={clsx(classes.row, { [classes.rowChecked]: checked }, 'crm-row')}>
                {checkbox}
                <Box component="span" className={classes.rowItem}>
                  <Box
                  // className={classes.itemButton}
                  // onClick={() => push(AppRoute.crmRelationsDetails.replace(':id', baseItem.id))}
                  >
                    {views[activeView].renderViewComponent(item)}
                  </Box>
                </Box>
              </Box>
            );
          }}
        />
      </FormSection>
    </Grid>
  );
};
