import React, { useState } from 'react';
import clsx from 'classnames';
import { useHistory, useLocation } from 'react-router-dom';

import { useLocale, useModalDispatch } from 'hooks';
import { Page } from 'ui/templates';
import { Button, Card, CardContent, CardHeader, Radio, TableCell, TableHead, TableRow, Typography } from 'ui/atoms';
import { AllocateCriteriaType } from '../AllocateCriteria.types';
import { ListPimsFilters } from 'api/types';
import { FiltersButton } from 'ui/molecules/filters/FiltersButton';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';
import { ActionTabs, InfoSection, ListOptionsMenu, PropertyItemPlaceholder } from 'ui/molecules';
import { SortOption } from 'ui/molecules/list/List.types';
import { TableList } from 'ui/molecules/tableList/TableList';
import { AddAllocateCriteria } from '../addAllocateCriteria/AddAllocateCriteriaModal';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';
import { StampIcon } from 'ui/atoms/icons';

import { AllocateCriteriaListProps } from './AllocateCriteriaList.types';
import { useStyles } from './AllocateCriteriaList.styles';

export const AllocateCriteriaList = ({ type, items, onSubmit }: AllocateCriteriaListProps) => {
  const { formatMessage } = useLocale();
  const [activeFilters, setActiveFilters] = useState<ListPimsFilters>({});
  const [status, setStatus] = useState<'active' | 'inactive'>('active');
  const classes = useStyles();
  const { open } = useModalDispatch();
  const { push } = useHistory();
  const { pathname } = useLocation();

  const title = formatMessage({ id: 'settings.allocate_criteria.list_title' }, { type });

  const handleFilterChange = (filters: ListPimsFilters) => {
    setActiveFilters(filters);
  };

  const tabs: ActionTab[] = [
    {
      value: 'active',
      amount: 1,
      label: 'common.active',
    },
    {
      value: 'inactive',
      amount: 0,
      label: 'common.inactive',
    },
  ];

  const sortOptions: SortOption[] = [
    {
      name: formatMessage({ id: 'common.sort_options.most_used' }),
      key: 'mostUsed',
    },
  ];

  return (
    <>
      <Page
        title={formatMessage({ id: 'settings.allocate_criteria' })}
        titleActions={
          type === AllocateCriteriaType.Custom ? (
            <Button size="small" variant="contained" color="primary" onClick={() => open('add-allocate-criteria')}>
              {formatMessage({ id: 'settings.allocate_criteria.add_allocate_criteria' })}
            </Button>
          ) : (
            <></>
          )
        }
      >
        {items.length === 0 && (
          <Card>
            <CardContent>
              <InfoSection emoji="🤔">
                <Typography variant="h3">
                  {formatMessage({
                    id: 'settings.allocate_criteria.empty_title',
                  })}
                </Typography>
                <Typography variant="h3">
                  {formatMessage({
                    id: 'settings.allocate_criteria.empty_description',
                  })}
                </Typography>
              </InfoSection>
            </CardContent>
          </Card>
        )}
        {items.length > 0 && (
          <Card>
            <CardHeader
              title={title}
              action={<FiltersButton color="primary" data={activeFilters} getActiveFilters={handleFilterChange} />}
            />
            <CardContent>
              <ActionTabs onStatusChange={setStatus} status={status} tabs={tabs} />
              <TableList
                items={items}
                itemIndex={'id'}
                header={
                  <TableHead>
                    <TableCell />
                    <TableCell>{formatMessage({ id: 'settings.allocate_criteria.title' })}</TableCell>
                    <TableCell>{formatMessage({ id: 'settings.allocate_criteria.type_of_property' })}</TableCell>
                    <TableCell>{formatMessage({ id: 'settings.allocate_criteria.price' })}</TableCell>
                    <TableCell>{formatMessage({ id: 'settings.allocate_criteria.used' })}</TableCell>
                    <TableCell />
                  </TableHead>
                }
                renderItem={(item, checked, checkbox) => (
                  <TableRow
                    className={clsx(classes.row, checked && classes.rowChecked)}
                    onClick={() => type === AllocateCriteriaType.Custom && push(`${pathname}/${item.id}`)}
                  >
                    <TableCell padding="checkbox">{checkbox}</TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>
                      {formatMessage({ id: `settings.allocate_criteria.type_of_property.${item.typeOfProperty}` })}
                    </TableCell>
                    <TableCell>{formatMessage({ id: `settings.allocate_criteria.price.${item.price}` })}</TableCell>
                    <TableCell>{item.used}</TableCell>
                    <TableCell>
                      <ListOptionsMenu hideDeleteButton={type === AllocateCriteriaType.Bricr} hideEditButton>
                        <ListOptionsMenuItem
                          icon={<StampIcon />}
                          onClick={() => {}}
                          title={formatMessage({ id: 'settings.allocate_criteria.list.clone' })}
                        />
                        <ListOptionsMenuItem
                          icon={<Radio color="primary" checked={false} className={classes.checkbox} />}
                          onClick={() => {}}
                          title={formatMessage({ id: 'settings.allocate_criteria.list.inactive' })}
                        />
                      </ListOptionsMenu>
                    </TableCell>
                  </TableRow>
                )}
                loadingItem={<PropertyItemPlaceholder />}
                emptyTitle={formatMessage({ id: 'settings.allocate_criteria.list.empty_title' })}
                emptyDescription={formatMessage({ id: 'settings.allocate_criteria.empty_description' })}
                sortOptions={sortOptions}
              />
            </CardContent>
          </Card>
        )}
      </Page>
      <AddAllocateCriteria onSubmit={onSubmit} />
    </>
  );
};
