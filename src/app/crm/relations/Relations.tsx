import React, { useCallback, useState } from 'react';
import clsx from 'classnames';
import { useHistory } from 'react-router-dom';

import { CrmType, ListPimsFilters } from 'api/types';
import { Page } from 'ui/templates';
import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { Grid, Card, CardHeader, CardContent, Box } from 'ui/atoms';
import { CrmHeader } from '../crmHeader/CrmHeader';
import { CrmActionTabs } from '../crmActionTabs/CrmActionTabs';
import { useLocale } from 'hooks';
import { CrmSubHeader } from '../crmSubHeader/CrmSubHeader';
import { CrmItem } from '../Crm.types';
import { CrmListItem } from '../crmListItem/CrmListItem';
import { AppRoute } from 'routing/AppRoute.enum';
import { ActiveFilters } from 'ui/molecules/filters/activeFilters/ActiveFilters';

import { RelationsProps } from './Relations.types';
import { useStyles } from './Relations.styles';
import { CrmTableView } from './../crmTableView/CrmTableView';

export const Relations = ({
  onSidebarOpen,
  isSidebarVisible,
  status,
  onStatusChange,
  amounts,
  crms,
  onUpdateItemStatus,
  onDeleteItem,
  onFilter,
  activeFilters,
  sorting,
  pagination,
}: RelationsProps) => {
  const { push } = useHistory();
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const [viewMode, setViewMode] = useState<'list' | 'table'>('list');

  const crmItemsFiltered = crms.filter(crmItem => crmItem.status === status);

  const [selected, setSelected] = useState<string[]>([]);

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
      <CrmHeader type={CrmType.Relation} onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <Page withoutHeader>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={formatMessage({ id: `crm.type.relations` })}
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
                    actionRequired: amounts?.ActionRequired || 0,
                    active: amounts?.Active || 0,
                    inactive: amounts?.Inactive || 0,
                  }}
                />
              </Box>
              <Box mt={-2}>
                <ActiveFilters<ListPimsFilters> activeFilters={activeFilters} onDelete={onFilter} />
              </Box>
              <Box px={2}>
                {viewMode === 'table' ? (
                  <CrmTableView
                    items={crmItemsFiltered as CrmItem[]}
                    selected={selected}
                    onSelectItem={handleSelectItem}
                    onSelectAllItems={handleSelectAllItems}
                    pagination={pagination}
                  />
                ) : (
                  <List
                    className="crm-list"
                    items={crmItemsFiltered as CrmItem[]}
                    itemIndex={'id'}
                    loadingItem={<PropertyItemPlaceholder />}
                    emptyTitle={formatMessage({ id: 'crm.list.empty_title' })}
                    emptyDescription={formatMessage(
                      { id: 'crm.list.empty_description' },
                      { buttonName: formatMessage({ id: `crm.add.relations` }) },
                    )}
                    renderItem={(crm, checked, checkbox) => (
                      <Box key={crm.id} className={clsx(classes.row, { [classes.rowChecked]: checked }, 'crm-row')}>
                        {checkbox}
                        <Box component="span" className={classes.rowItem}>
                          <Box
                            className={classes.itemButton}
                            onClick={() => push(AppRoute.crmRelationsDetails.replace(':id', crm.id))}
                          >
                            <CrmListItem crm={crm} onUpdateStatus={onUpdateItemStatus} onDelete={onDeleteItem} />
                          </Box>
                        </Box>
                      </Box>
                    )}
                    pagination={pagination}
                    sortOptions={sorting.sortOptions}
                    onSort={sorting.onSort}
                    onSelectItems={setSelected}
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
