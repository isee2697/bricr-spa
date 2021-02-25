import React, { useState } from 'react';
import classnames from 'classnames';
import { DateTime } from 'luxon';

import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  Box,
  Typography,
  Card,
  CardHeader,
  CardContent,
  IconButton,
} from 'ui/atoms';
import { ArrowUpIcon, ArrowDownIcon, ClockIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks/useLocale/useLocale';
import { ListOptionsMenu } from 'ui/molecules';
import { SortOption } from 'ui/molecules/list/List.types';
import { ListHeader } from 'ui/molecules/list/listHeader/ListHeader';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';
import { FiltersButton } from 'ui/molecules/filters/FiltersButton';
import { ListPimsFilters } from 'api/types';
import { ActiveFilters } from 'ui/molecules/filters/activeFilters/ActiveFilters';
import { NcpAllocateResultDetailsFilters } from '../dictionaries';

import { AssignedTableHeaderCell, AssignedTableViewProps } from './AssignedTableView.types';
import { useStyles } from './AssignedTableView.styles';

export const AssignedTableView = ({
  type,
  properties,
  onClick,
  selected,
  onSelectProperty,
  onSelectAllProperties,
}: AssignedTableViewProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const [isExpanded, setIsExpanded] = useState(true);

  const sortOptions: SortOption[] = [
    {
      name: formatMessage({ id: 'project_details.allocateResults.sort_option.newest' }),
      key: 'newest',
    },
  ];

  const [, setSort] = useState(sortOptions.length > 0 ? sortOptions[0].key : '');
  const [activeFilters, setActiveFilters] = useState<ListPimsFilters>({});

  const headerCells: AssignedTableHeaderCell[] = [
    {
      field: 'name',
      label: formatMessage({ id: 'project_details.allocateResults.assigned.document_name' }),
    },
    {
      field: 'date',
      label: formatMessage({ id: 'project_details.allocateResults.assigned.date' }),
      renderer: property => (
        <Typography variant="h5">{DateTime.fromJSDate(property.date)?.toFormat('dd-MM-yyyy') || ''}</Typography>
      ),
    },
    {
      field: 'type',
      label: formatMessage({ id: 'project_details.allocateResults.assigned.type' }),
    },
    {
      field: 'price',
      label: formatMessage({ id: 'project_details.allocateResults.assigned.price' }),
      renderer: property => `€ ${property.price}`,
    },
  ];

  const handleFilterChange = (filters: ListPimsFilters) => {
    setActiveFilters(filters);
  };

  return (
    <Card>
      <CardHeader
        title={
          <Box ml={8} display="flex" alignItems="center">
            <Box className={type === 'assigned' ? classes.assigned : classes.unassigned} mr={3}>
              {properties.length}
            </Box>
            <Typography variant="h2">
              {formatMessage({ id: `project_details.allocate_results_details.ranking_relations` })}
            </Typography>
          </Box>
        }
        action={
          <IconButton size="small" variant="roundedContained" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </IconButton>
        }
      />

      {isExpanded ? (
        <CardContent className={classes.content}>
          <ListHeader
            sortOptions={sortOptions}
            onSort={value => {
              setSort(value);
            }}
            checkedKeys={selected}
            checkAllStatus={{
              checked: properties?.length === selected.length,
              indeterminate: properties?.length !== selected.length && selected.length > 0,
            }}
            onCheckAll={onSelectAllProperties}
            bulkComponent={
              <Box ml={0.5} mr={1.5}>
                <ListOptionsMenu onEditClick={() => {}} onDeleteClick={() => {}} />
              </Box>
            }
            actionButtons={
              <FiltersButton
                color="primary"
                data={activeFilters}
                getActiveFilters={handleFilterChange}
                filters={NcpAllocateResultDetailsFilters}
              />
            }
          />
          {Object.keys(activeFilters).length > 0 && (
            <Box mt={-1}>
              <ActiveFilters<ListPimsFilters> activeFilters={activeFilters} onDelete={handleFilterChange} />
            </Box>
          )}
          <Table>
            <TableBody>
              {properties.map((item, index) => (
                <TableRow key={index} onClick={() => onClick?.(item.id)} className={classnames(classes.tableRow)}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={selected.includes(item.id)}
                      inputProps={{ 'aria-labelledby': item.id }}
                      onClick={e => {
                        e.stopPropagation();
                        onSelectProperty(item.id);
                      }}
                    />
                  </TableCell>
                  {headerCells.map((cell, index) => (
                    <TableCell key={index}>
                      {cell.renderer ? cell.renderer(item) : cell.field ? item[cell.field] : null}
                    </TableCell>
                  ))}
                  <TableCell className={classes.tableCellActions}>
                    <ListOptionsMenu
                      id={`allocate-results-details-${type}-${item.id}`}
                      onDeleteClick={() => {}}
                      hideEditButton
                    >
                      <ListOptionsMenuItem
                        title={formatMessage({
                          id: 'project_details.allocateResults.mail',
                        })}
                        icon={<ClockIcon />}
                      />
                      <ListOptionsMenuItem
                        title={formatMessage({
                          id: 'project_details.allocateResults.start_workflow',
                        })}
                        icon={<ClockIcon />}
                      />
                      <ListOptionsMenuItem
                        title={formatMessage({
                          id: 'project_details.allocateResults.change_role',
                        })}
                        icon={<ClockIcon />}
                      />
                      <ListOptionsMenuItem
                        title={formatMessage({
                          id: 'project_details.allocateResults.drop_out',
                        })}
                        icon={<ClockIcon />}
                      />
                    </ListOptionsMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      ) : (
        <Box mt={2} />
      )}
    </Card>
  );
};
