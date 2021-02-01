import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';

import { ListPimsFilters, Pim as PimEntity } from 'api/types';
import { Box, Grid, Card, CardHeader, CardContent, IconButton } from 'ui/atoms';
import { List, ListOptionsMenu, PropertyItemPlaceholder } from 'ui/molecules';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AppRoute } from 'routing/AppRoute.enum';
import { HamburgerIcon, ListIcon, LocationIcon } from 'ui/atoms/icons';
import { ListHeader } from 'ui/molecules/list/listHeader/ListHeader';

import { PimHeader } from './pimHeader/PimHeader';
import { PimActionTabs } from './pimActionTabs/PimActionTabs';
import { PimItem } from './pimItem/PimItem';
import { PimProps } from './Pim.types';
import { useStyles } from './Pim.styles';
import { MovePimModal } from './movePimModal/MovePimModal';
import { FiltersButton } from './pimFilters/FiltersButton';
import { ActiveFilters } from './pimFilters/activeFilters/ActiveFilters';
import { PimTableView } from './pimTableView/PimTableView';

export const PimList = ({
  status,
  onStatusChange,
  type,
  isLoading,
  amounts,
  listData,
  sorting,
  pagination,
  onFilter,
  activeFilters,
  teams,
  accountManagers,
}: PimProps) => {
  const [viewMode, setViewMode] = useState<'list' | 'table'>(type === 'purchase' ? 'table' : 'list');
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { push } = useHistory();

  const [selected, setSelected] = useState<string[]>([]);
  const [, setSort] = useState(sorting.sortOptions.length > 0 ? sorting.sortOptions[0].key : '');

  const handleSelectItem = (itemId: string) => {
    const index = selected.findIndex(id => id === itemId);

    if (index >= 0) {
      setSelected(selected.filter(id => id !== itemId));
    } else {
      setSelected([...selected, itemId]);
    }
  };

  const handleSelectAllItems = useCallback(() => {
    const items = listData?.listPims?.items;
    setSelected(items && items?.length !== selected.length ? items.map(item => item.id) : []);
  }, [listData, selected.length]);

  return (
    <>
      <Grid data-testid={`pim-list-${type}`} container spacing={3} className={classes.content}>
        <PimHeader type={type} />
        <Grid item xs={12}>
          <Card>
            <CardHeader
              className="pim-list-header"
              title={formatMessage({ id: `pim.type.${type}` })}
              action={
                <Box display="flex">
                  {type !== 'purchase' && (
                    <Box mr={2}>
                      <IconButton variant="rounded" size="small" aria-label="list" onClick={() => setViewMode('list')}>
                        <ListIcon color={viewMode === 'list' ? 'primary' : 'inherit'} />
                      </IconButton>
                    </Box>
                  )}
                  <Box mr={2}>
                    <IconButton variant="rounded" size="small" aria-label="table" onClick={() => setViewMode('table')}>
                      <HamburgerIcon color={viewMode === 'table' ? 'primary' : 'inherit'} />
                    </IconButton>
                  </Box>
                  <Box mr={2}>
                    <IconButton variant="rounded" size="small" onClick={() => {}}>
                      <LocationIcon />
                    </IconButton>
                  </Box>
                  <Box mr={3}>
                    <FiltersButton
                      color="primary"
                      data={activeFilters}
                      getActiveFilters={onFilter}
                      teams={teams}
                      accountManagers={accountManagers}
                    />
                  </Box>
                </Box>
              }
            />
            <CardContent className={classes.listContent}>
              <Box mx={2}>
                <PimActionTabs status={status} onStatusChange={onStatusChange} amounts={amounts} />
              </Box>
              <Box width="100%" display="flex" flexDirection="column" pt={2}>
                <ListHeader
                  sortOptions={sorting.sortOptions}
                  onSort={value => {
                    setSort(value);
                    sorting.onSort(value);
                  }}
                  checkedKeys={selected}
                  checkAllStatus={{
                    checked: listData?.listPims?.items?.length === selected.length,
                    indeterminate: listData?.listPims?.items?.length !== selected.length && selected.length > 0,
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
                <ActiveFilters<ListPimsFilters> activeFilters={activeFilters} onDelete={onFilter} />
              </Box>
              {viewMode === 'table' ? (
                <PimTableView
                  items={(listData?.listPims?.items ?? []) as PimEntity[]}
                  selected={selected}
                  onSelectItem={handleSelectItem}
                  onSelectAllItems={handleSelectAllItems}
                  onArchive={() => {}}
                  onEdit={() => {}}
                  onDelete={() => {}}
                />
              ) : (
                <List
                  className="pim-list"
                  items={(listData?.listPims?.items ?? []) as PimEntity[]}
                  itemIndex={'id'}
                  renderItem={(pim, checked, checkbox) => (
                    <Box key={pim.id} className={classNames(classes.row, { [classes.rowChecked]: checked }, 'pim-row')}>
                      {checkbox}
                      <Box component="span" className={classes.rowItem}>
                        <Box
                          className={classes.itemButton}
                          onClick={() => push(AppRoute.pimDetails.replace(':id', pim.id))}
                        >
                          <PimItem {...pim} />
                        </Box>
                      </Box>
                    </Box>
                  )}
                  pagination={pagination}
                  loading={isLoading}
                  loadingItem={<PropertyItemPlaceholder />}
                  emptyTitle={formatMessage({ id: 'pim.list.empty_title' })}
                  emptyDescription={formatMessage({ id: 'pim.list.empty_description' })}
                  isShowHeader={false}
                />
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <MovePimModal />
    </>
  );
};
