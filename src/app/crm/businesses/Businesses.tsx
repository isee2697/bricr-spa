import React, { useCallback, useState } from 'react';
import clsx from 'classnames';
import { useHistory } from 'react-router-dom';

import { CrmListItem as CrmListItemType, CrmStatus, CrmType, ListCrmFilters } from 'api/types';
import { Page } from 'ui/templates';
import { List, ListOptionsMenu, PropertyItemPlaceholder } from 'ui/molecules';
import { Grid, Card, CardHeader, CardContent, Box } from 'ui/atoms';
import { CrmHeader } from '../crmHeader/CrmHeader';
import { CrmActionTabs } from '../crmActionTabs/CrmActionTabs';
import { useLocale } from 'hooks';
import { CrmSubHeader } from '../crmSubHeader/CrmSubHeader';
import { CrmItem } from '../Crm.types';
import { CrmListItem } from '../crmListItem/CrmListItem';
import { AppRoute } from 'routing/AppRoute.enum';
import { SortOption } from 'ui/molecules/list/List.types';
import { ListHeader } from 'ui/molecules/list/listHeader/ListHeader';
import { ActiveFilters } from 'ui/molecules/filters/activeFilters/ActiveFilters';

import { BusinessesProps } from './Businesses.types';
import { useStyles } from './Businesses.styles';
import { CrmTableView } from './../crmTableView/CrmTableView';

export const Businesses = ({
  onSidebarOpen,
  isSidebarVisible,
  status,
  onStatusChange,
  crms,
  onFilter,
  activeFilters,
}: BusinessesProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const { push } = useHistory();

  const [viewMode, setViewMode] = useState<'list' | 'table'>('list');

  const crmItemsFiltered = crms.filter(crmItem => crmItem.status === status);

  const sortOptions: SortOption[] = [
    {
      name: formatMessage({ id: 'crm.list.sort_option.newest' }),
      key: 'newest',
    },
  ];

  const [selected, setSelected] = useState<string[]>([]);
  const [, setSort] = useState(sortOptions.length > 0 ? sortOptions[0].key : '');

  const handleSelectItem = (itemId: string) => {
    const index = selected.findIndex(id => id === itemId);

    if (index >= 0) {
      setSelected(selected.filter(id => id !== itemId));
    } else {
      setSelected([...selected, itemId]);
    }
  };

  const handleSelectAllItems = useCallback(() => {
    setSelected(
      crmItemsFiltered && crmItemsFiltered?.length !== selected.length ? crmItemsFiltered.map(item => item.id) : [],
    );
  }, [crmItemsFiltered, selected.length]);

  return (
    <>
      <CrmHeader type={CrmType.Business} onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <Page withoutHeader>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={formatMessage({ id: `crm.type.businesses` })}
              action={
                <CrmSubHeader
                  viewMode={viewMode}
                  setViewMode={setViewMode}
                  activeFilters={activeFilters}
                  onFilter={onFilter}
                />
              }
            />
            <CardContent className={classes.listContainer}>
              <Box mx={2}>
                <CrmActionTabs
                  status={status}
                  onStatusChange={onStatusChange}
                  amounts={{
                    actionRequired: crms.filter(crmItem => crmItem.status === CrmStatus.ActionRequired).length,
                    active: crms.filter(crmItem => crmItem.status === CrmStatus.Active).length,
                    inactive: crms.filter(crmItem => crmItem.status === CrmStatus.Inactive).length,
                  }}
                />
              </Box>
              <Box width="100%" display="flex" flexDirection="column" pt={2}>
                <ListHeader
                  sortOptions={sortOptions}
                  onSort={value => {
                    setSort(value);
                  }}
                  checkedKeys={selected}
                  checkAllStatus={{
                    checked: crmItemsFiltered?.length === selected.length,
                    indeterminate: crmItemsFiltered?.length !== selected.length && selected.length > 0,
                  }}
                  onCheckAll={handleSelectAllItems}
                  bulkComponent={
                    <Box ml={0.5} mr={1.5}>
                      <ListOptionsMenu onEditClick={() => {}} onDeleteClick={() => {}} />
                    </Box>
                  }
                />
              </Box>
              <Box mt={-2}>
                <ActiveFilters<ListCrmFilters> activeFilters={activeFilters} onDelete={onFilter} />
              </Box>
              <Box px={2}>
                {viewMode === 'table' ? (
                  <CrmTableView
                    items={crmItemsFiltered as CrmItem[]}
                    selected={selected}
                    onSelectItem={handleSelectItem}
                    onSelectAllItems={handleSelectAllItems}
                  />
                ) : (
                  <List<CrmListItemType>
                    className="crm-list"
                    items={crmItemsFiltered as CrmListItemType[]}
                    itemIndex={'id'}
                    loadingItem={<PropertyItemPlaceholder />}
                    emptyTitle={formatMessage({ id: 'crm.list.empty_title' })}
                    emptyDescription={formatMessage(
                      { id: 'crm.list.empty_description' },
                      { buttonName: formatMessage({ id: `crm.add.businesses` }) },
                    )}
                    renderItem={(crm, checked, checkbox) => (
                      <Box
                        key={crm.id}
                        className={clsx(classes.row, { [classes.rowChecked]: checked }, 'crm-row', crm.status)}
                      >
                        {checkbox}
                        <Box component="span" className={classes.rowItem}>
                          <Box
                            className={classes.itemButton}
                            onClick={() => push(AppRoute.crmBusinessesDetails.replace(':id', crm.id))}
                          >
                            <CrmListItem crm={crm} />
                          </Box>
                        </Box>
                      </Box>
                    )}
                    sortOptions={sortOptions}
                  />
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Page>
    </>
  );
};
