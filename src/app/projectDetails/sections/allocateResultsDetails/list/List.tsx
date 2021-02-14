import React, { useCallback, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { Card, CardContent, CardHeader, Grid, IconButton, Box } from 'ui/atoms';
import { useLocale } from 'hooks';
import { ArrowDownIcon, ArrowUpIcon, ListIcon, HamburgerIcon } from 'ui/atoms/icons';
import { List, ListOptionsMenu, PropertyItemPlaceholder } from 'ui/molecules';
import { SortOption } from 'ui/molecules/list/List.types';
import { NCP_MATCH_ALLOCATED_PROPERTIES } from 'api/mocks/ncp-list';
import { FiltersButton } from 'ui/molecules/filters/FiltersButton';
import { ListPimsFilters } from 'api/types';
import { ListHeader } from 'ui/molecules/list/listHeader/ListHeader';
import { ActiveFilters } from 'ui/molecules/filters/activeFilters/ActiveFilters';
import { AppRoute } from 'routing/AppRoute.enum';
import { joinUrlParams } from 'routing/AppRoute.utils';

import { useStyles } from './List.styles';
import { AllocatedProperty } from './List.types';
import { ListItem } from './listItem/ListItem';
import { AllocateResultsTableView } from './crmTableView/AllocateResultsTableView';

export const AllocateResultsList = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { push } = useHistory();
  const { params } = useRouteMatch();

  const [isExpanded, setIsExpanded] = useState(true);
  const [viewMode, setViewMode] = useState<'detail' | 'table'>('detail');

  const items = NCP_MATCH_ALLOCATED_PROPERTIES as AllocatedProperty[];

  const [activeFilters, setActiveFilters] = useState<ListPimsFilters>({});

  const sortOptions: SortOption[] = [
    {
      name: formatMessage({ id: 'project_details.allocate_results_details.sort_option.newest' }),
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
    setSelected(items && items?.length !== selected.length ? items.map(item => item.id) : []);
  }, [items, selected.length]);

  const handleFilterChange = (filters: ListPimsFilters) => {
    setActiveFilters(filters);
  };

  const handleNavigateDetailItem = (id: string) => {
    push(joinUrlParams(`${AppRoute.projectDetails}/allocateResults/:resultId/${id}`, params));
  };

  return (
    <Card>
      <CardHeader
        title={formatMessage({ id: `project_details.allocate_results_details.allocate_result` })}
        action={
          <Grid container spacing={2}>
            <Grid item>
              <IconButton variant="rounded" size="small" aria-label="detail" onClick={() => setViewMode('detail')}>
                <ListIcon color={viewMode === 'detail' ? 'primary' : 'inherit'} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton variant="rounded" size="small" aria-label="table" onClick={() => setViewMode('table')}>
                <HamburgerIcon color={viewMode === 'table' ? 'primary' : 'inherit'} />
              </IconButton>
            </Grid>
            <Grid item>
              <FiltersButton data={activeFilters} getActiveFilters={handleFilterChange} />
            </Grid>
            <Grid item>
              <IconButton size="small" variant="roundedContained" onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </IconButton>
            </Grid>
          </Grid>
        }
      />
      {isExpanded ? (
        <CardContent className={classes.content}>
          <Box width="100%" display="flex" flexDirection="column" pt={2}>
            <ListHeader
              sortOptions={sortOptions}
              onSort={value => {
                setSort(value);
              }}
              checkedKeys={selected}
              checkAllStatus={{
                checked: items?.length === selected.length,
                indeterminate: items?.length !== selected.length && selected.length > 0,
              }}
              onCheckAll={handleSelectAllItems}
              bulkComponent={
                <Box ml={0.5} mr={1.5}>
                  <ListOptionsMenu onEditClick={() => {}} onDeleteClick={() => {}} />
                </Box>
              }
            />
          </Box>
          {Object.keys(activeFilters).length > 0 && (
            <Box mt={-2}>
              <ActiveFilters<ListPimsFilters> activeFilters={activeFilters} onDelete={handleFilterChange} />
            </Box>
          )}
          {viewMode === 'table' ? (
            <AllocateResultsTableView
              items={items}
              selected={selected}
              onSelectItem={handleSelectItem}
              onSelectAllItems={handleSelectAllItems}
              onClick={handleNavigateDetailItem}
            />
          ) : (
            <List
              items={items}
              itemIndex={'id'}
              loadingItem={<PropertyItemPlaceholder />}
              emptyTitle={formatMessage({ id: 'project_details.allocate_results_details.allocate_result.empty_title' })}
              emptyDescription={formatMessage({
                id: 'project_details.allocate_results_details.allocate_result.empty_description',
              })}
              renderItem={(property, checked, checkbox) => (
                <ListItem
                  key={property.id}
                  item={property}
                  checkbox={checkbox}
                  checked={checked}
                  onClick={() => handleNavigateDetailItem(property.id)}
                />
              )}
              isShowHeader={false}
              pagination={{
                count: 8,
                currentPerPage: 10,
                perPageOptions: [10, 25, 'All'],
                onPerPageChange: value => {
                  alert(value);
                },
              }}
            />
          )}
        </CardContent>
      ) : (
        <Box mt={2} />
      )}
    </Card>
  );
};
