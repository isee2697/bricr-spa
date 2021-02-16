import React, { useCallback, useState } from 'react';
import clsx from 'classnames';
import { useHistory } from 'react-router-dom';

import { CrmType, ListCrmFilters, BulkField } from 'api/types';
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
import { ActiveFilters } from '../filters/activeFilters/ActiveFilters';
import { FieldChange } from 'ui/bulk/fieldChange/FieldChange';

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
  bulkData,
  onBulkOpen,
  onSelectItems,
  selectedItems,
}: RelationsProps) => {
  const { push } = useHistory();
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const [viewMode, setViewMode] = useState<'list' | 'table'>('list');

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
                    selectedItems={selectedItems}
                    onSelectItems={onSelectItems}
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
                            fieldLabelId="project.bulk.status.label"
                            fieldName={BulkField.Status}
                            fieldPlaceholderId="project.bulk.status.placeholder"
                            valuesFieldName={'status'}
                            valuesLabel={formatMessage({ id: 'project.bulk.status.values_title' })}
                            type={'checkfield'}
                          />
                        ),
                      },
                    ]}
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
