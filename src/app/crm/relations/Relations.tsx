import React, { useCallback, useState } from 'react';
import clsx from 'classnames';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';

import { CrmStatus, CrmType } from 'api/types';
import { Page } from 'ui/templates';
import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { Grid, Card, CardHeader, CardContent, Box, FormControlLabel, Checkbox, Select, MenuItem } from 'ui/atoms';
import { CrmHeader } from '../crmHeader/CrmHeader';
import { CrmActionTabs } from '../crmActionTabs/CrmActionTabs';
import { useLocale } from 'hooks';
import { CrmSubHeader } from '../crmSubHeader/CrmSubHeader';
import { CrmItem } from '../Crm.types';
import { CrmListItem } from '../crmListItem/CrmListItem';
import { SortOption } from 'ui/molecules/list/List.types';
import { AppRoute } from 'routing/AppRoute.enum';

import { RelationsProps } from './Relations.types';
import { useStyles } from './Relations.styles';
import { CrmTableView } from './../crmTableView/CrmTableView';

export const Relations = ({
  onSidebarOpen,
  isSidebarVisible,
  status,
  onStatusChange,
  crms,
  onUpdateItemStatus,
  onDeleteItem,
}: RelationsProps) => {
  const { push } = useHistory();
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const [viewMode, setViewMode] = useState<'list' | 'table'>('list');

  const crmItemsFiltered = crms.filter(crmItem => crmItem.status === status);

  const sortOptions: SortOption[] = [
    {
      name: formatMessage({ id: 'crm.list.sort_option.newest' }),
      key: 'newest',
    },
  ];

  const [selected, setSelected] = useState<string[]>([]);
  const [sort, setSort] = useState(sortOptions.length > 0 ? sortOptions[0].key : '');

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
              action={<CrmSubHeader viewMode={viewMode} setViewMode={setViewMode} />}
            />
            <CardContent>
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
              <Box mx={2.5} mt={3} mb={2} display="flex" alignItems="center" justifyContent="space-between">
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      className="list-select-all"
                      checked={selected.length === crmItemsFiltered.length}
                      onClick={handleSelectAllItems}
                    />
                  }
                  label={formatMessage({ id: 'common.select_all' })}
                />
                <Select
                  className={classNames(classes.sort, 'sort-select')}
                  variant="outlined"
                  value={sort}
                  onChange={event => {
                    const value = event?.target.value as string;
                    setSort(value);
                  }}
                >
                  {sortOptions.map(({ key, name }) => (
                    <MenuItem key={key} value={key}>
                      {formatMessage({ id: `crm.list.sort_options.${name}` })}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
              {viewMode === 'table' ? (
                <CrmTableView
                  items={crmItemsFiltered as CrmItem[]}
                  selected={selected}
                  onSelectItem={handleSelectItem}
                  onSelectAllItems={handleSelectAllItems}
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
                  isShowHeader={false}
                />
              )}
            </CardContent>
          </Card>
        </Grid>
      </Page>
    </>
  );
};
