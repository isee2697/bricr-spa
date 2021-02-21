import React, { useCallback, useState } from 'react';
import clsx from 'classnames';
import { useHistory } from 'react-router-dom';

import { CrmType, ListCrmFilters, BulkField, CrmListItem as CrmListItemType } from 'api/types';
import { Page } from 'ui/templates';
import { ConfirmModal, List, PropertyItemPlaceholder } from 'ui/molecules';
import { Grid, Card, CardHeader, CardContent, Box, Typography } from 'ui/atoms';
import { CrmHeader } from '../crmHeader/CrmHeader';
import { CrmActionTabs } from '../crmActionTabs/CrmActionTabs';
import { useLocale, useModalDispatch } from 'hooks';
import { CrmSubHeader } from '../crmSubHeader/CrmSubHeader';
import { CrmItem } from '../Crm.types';
import { CrmListItem } from '../crmListItem/CrmListItem';
import { AppRoute } from 'routing/AppRoute.enum';
import { ActiveFilters } from '../filters/activeFilters/ActiveFilters';
import { FieldChange } from 'ui/bulk/fieldChange/FieldChange';
import { ConfirmButtonType } from 'ui/molecules/confirmModal/ConfirmModal.types';
import { MoveCrmRelationContainer } from '../moveRelation/MoveCrmRelationContainer';

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
  bulkData,
  onBulk,
  onBulkOpen,
  onSelectItems,
  selectedItems,
  viewMode,
  setViewMode,
}: RelationsProps) => {
  const { push } = useHistory();
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [deleteItem, setDeleteItem] = useState<CrmItem | null>(null);
  const { open } = useModalDispatch();

  const crmItemsFiltered = crms.filter(crmItem => crmItem.status === status);

  const handleSelectItem = (itemId: string) => {
    const index = selectedItems.findIndex(id => id === itemId);

    if (index >= 0) {
      onSelectItems(selectedItems.filter(id => id !== itemId));
    } else {
      onSelectItems([...selectedItems, itemId]);
    }
  };

  const handleSelectAllItems = useCallback(() => {
    onSelectItems(
      crmItemsFiltered && crmItemsFiltered?.length !== selectedItems.length
        ? crmItemsFiltered.map(item => item.id)
        : [],
    );
  }, [crmItemsFiltered, onSelectItems, selectedItems.length]);

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
                    selected={selectedItems}
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
                  <List<CrmListItemType>
                    className="crm-list"
                    items={crmItemsFiltered as CrmListItemType[]}
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
                    selectedItems={selectedItems}
                    onSelectItems={onSelectItems}
                    onBulk={onBulk}
                    onBulkOpen={onBulkOpen}
                    bulkTitle={formatMessage({ id: 'crm.bulk.title' })}
                    bulkData={bulkData}
                    bulkSubmitText={formatMessage({ id: 'crm.bulk.submit' })}
                    bulkActions={[
                      {
                        key: BulkField.Status,
                        title: formatMessage({ id: 'crm.bulk.status.title' }),
                        content: (
                          <FieldChange
                            fieldLabelId="crm.bulk.status.label"
                            fieldName={BulkField.Status}
                            fieldPlaceholderId="crm.bulk.status.placeholder"
                            valuesFieldName={'status'}
                            valuesLabel={formatMessage({ id: 'crm.bulk.status.values_title' })}
                            type={'checkfield'}
                          />
                        ),
                      },
                    ]}
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
