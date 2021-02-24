import React, { useCallback, useState } from 'react';
import clsx from 'classnames';
import { useHistory } from 'react-router-dom';

import { BulkOperations, CrmType, ListCrmFilters } from 'api/types';
import { Page } from 'ui/templates';
import { ConfirmModal, List, PropertyItemPlaceholder } from 'ui/molecules';
import { Grid, Card, CardHeader, CardContent, Box, Typography } from 'ui/atoms';
import { CrmHeader } from '../crmHeader/CrmHeader';
import { CrmActionTabs } from '../crmActionTabs/CrmActionTabs';
import { useLocale } from 'hooks';
import { CrmSubHeader } from '../crmSubHeader/CrmSubHeader';
import { CrmItem } from '../Crm.types';
import { CrmListItem } from '../crmListItem/CrmListItem';
import { AppRoute } from 'routing/AppRoute.enum';
import { ActiveFilters } from 'ui/molecules/filters/activeFilters/ActiveFilters';
import { ConfirmButtonType } from 'ui/molecules/confirmModal/ConfirmModal.types';
import { MoveCrmRelationContainer } from '../moveRelation/MoveCrmRelationContainer';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';

import { RelationsProps } from './Relations.types';
import { useStyles } from './Relations.styles';
import { CrmTableView } from './../crmTableView/CrmTableView';
import { RelationsMenu } from './relationsMenu/RelationsMenu';

export const Relations = ({
  onSidebarOpen,
  isSidebarVisible,
  status,
  onStatusChange,
  amounts,
  crms,
  onUpdateItemStatus,
  onOperation,
  onFilter,
  activeFilters,
  sorting,
  pagination,
  viewMode,
  setViewMode,
}: RelationsProps) => {
  const { push } = useHistory();
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [deleteItem, setDeleteItem] = useState<CrmItem | null>(null);
  const { open } = useModalDispatch();

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
                <ActiveFilters<ListCrmFilters> activeFilters={activeFilters} onDelete={onFilter} />
              </Box>
              <Box px={2}>
                {viewMode === 'table' ? (
                  <CrmTableView
                    items={crmItemsFiltered as CrmItem[]}
                    selected={selected}
                    onSelectItem={handleSelectItem}
                    onSelectAllItems={handleSelectAllItems}
                    pagination={pagination}
                    onClick={id => push(AppRoute.crmRelationsDetails.replace(':id', id))}
                    renderAction={(item: CrmItem) => (
                      <RelationsMenu
                        item={item}
                        onMerge={id => push(`${AppRoute.crm}/merge/${id}`)}
                        onMove={() => open('move-crm-relation')}
                        onUpdateStatus={onUpdateItemStatus}
                        onDelete={() => setDeleteItem(item)}
                      />
                    )}
                    sortOptions={sorting.sortOptions}
                    onSort={sorting.onSort}
                  />
                ) : (
                  <List<CrmItem>
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
                            <CrmListItem
                              crm={crm}
                              renderAction={(item: CrmItem) => (
                                <RelationsMenu
                                  item={item}
                                  onMerge={id => push(`${AppRoute.crm}/merge/${id}`)}
                                  onMove={() => {
                                    open('move-crm-relation');
                                  }}
                                  onUpdateStatus={onUpdateItemStatus}
                                  onDelete={() => setDeleteItem(item)}
                                />
                              )}
                            />
                          </Box>
                        </Box>
                      </Box>
                    )}
                    pagination={pagination}
                    sortOptions={sorting.sortOptions}
                    onSort={sorting.onSort}
                    onSelectItems={setSelected}
                    onOperation={onOperation}
                  />
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {deleteItem && (
          <ConfirmModal
            isOpened={!!deleteItem}
            onCancel={() => setDeleteItem(null)}
            onConfirm={() => {
              setDeleteItem(null);
              onOperation(BulkOperations.Delete, [deleteItem]);
            }}
            messageLineFirst={formatMessage(
              { id: 'bulk_actions.delete.message_line_1' },
              {
                count: 1,
                name: `${deleteItem.firstName} ${deleteItem.insertion} ${deleteItem.lastName}`,
                span: msg => (
                  <Typography component="span" color="secondary">
                    {msg}
                  </Typography>
                ),
              },
            )}
            messageLineSecond={formatMessage({ id: 'bulk_actions.delete.message_line_2' })}
            cancelText={formatMessage({ id: 'bulk_actions.delete.cancel' })}
            confirmText={formatMessage({ id: 'bulk_actions.delete.confirm' }, { count: 1 })}
            title={formatMessage({ id: 'bulk_actions.delete.title' }, { count: 1 })}
            emoji={'😬'}
            confirmButtonType={ConfirmButtonType.ERROR}
          />
        )}

        <MoveCrmRelationContainer />
      </Page>
    </>
  );
};
