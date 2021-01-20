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
import { FiltersButton } from 'ui/molecules/filters/FiltersButton';
import { ActiveFilters } from 'ui/molecules/filters/activeFilters/ActiveFilters';
import { ListIcon, SwimlaneIcon, LocationIcon } from 'ui/atoms/icons';

import { PimHeader } from './pimHeader/PimHeader';
import { PimActionTabs } from './pimActionTabs/PimActionTabs';
import { PimItem } from './pimItem/PimItem';
import { PimProps } from './Pim.types';
import { useStyles } from './Pim.styles';
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
}: PimProps) => {
  const [viewMode, setViewMode] = useState<'list' | 'table'>('table');
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { push } = useHistory();

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
                <Box mr={2}>
                  <IconButton variant="rounded" size="small" aria-label="table" onClick={() => setViewMode('table')}>
                    <ListIcon color={viewMode === 'table' ? 'primary' : 'inherit'} />
                  </IconButton>
                </Box>
                <Box mr={2}>
                  <IconButton variant="rounded" size="small" aria-label="list" onClick={() => setViewMode('list')}>
                    <SwimlaneIcon color={viewMode === 'list' ? 'primary' : 'inherit'} />
                  </IconButton>
                </Box>
                <Box mr={2}>
                  <IconButton variant="rounded" size="small" onClick={() => {}}>
                    <LocationIcon />
                  </IconButton>
                </Box>
                <FiltersButton data={activeFilters} getActiveFilters={onFilter} />
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
              <Select variant="outlined" value={sorting.sortOptions[0]} className={classes.sort} onSelect={() => {}}>
                {sorting.sortOptions.map(option => (
                  <MenuItem key={option.key} value={option.key}>
                    {formatMessage({ id: `pim.list.sort_options.${option.name}` })}
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
