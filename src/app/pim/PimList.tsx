import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';

import { ListPimsFilters, Pim as PimEntity } from 'api/types';
import {
  Box,
  Grid,
  Card,
  CardHeader,
  CardContent,
  IconButton,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
} from 'ui/atoms';
import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AppRoute } from 'routing/AppRoute.enum';
import { HamburgerIcon, ListIcon, LocationIcon } from 'ui/atoms/icons';

import { PimHeader } from './pimHeader/PimHeader';
import { PimActionTabs } from './pimActionTabs/PimActionTabs';
import { PimItem } from './pimItem/PimItem';
import { PimProps } from './Pim.types';
import { useStyles } from './Pim.styles';
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
  const [sort, setSort] = useState(sorting.sortOptions.length > 0 ? sorting.sortOptions[0].key : '');

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
            <Box mx={2.5} mt={3} display="flex" alignItems="center" justifyContent="space-between">
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    className="list-select-all"
                    checked={selected.length === listData?.listPims?.items?.length}
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
                  sorting.onSort(value);
                }}
              >
                {sorting.sortOptions.map(({ key, name }) => (
                  <MenuItem key={key} value={key}>
                    {formatMessage({ id: `pim.list.sort_options.${name}` })}
                  </MenuItem>
                ))}
              </Select>
            </Box>
            <ActiveFilters<ListPimsFilters> activeFilters={activeFilters} onDelete={onFilter} />
            {viewMode === 'table' ? (
              <PimTableView
                items={(listData?.listPims?.items ?? []) as PimEntity[]}
                selected={selected}
                onSelectItem={handleSelectItem}
                onSelectAllItems={handleSelectAllItems}
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
                emptyDescription={formatMessage({
                  id: 'pim.list.empty_description',
                })}
                isShowHeader={false}
              />
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
