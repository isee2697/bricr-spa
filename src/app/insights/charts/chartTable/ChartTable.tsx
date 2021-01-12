import React, { useState } from 'react';
import clsx from 'classnames';
import { SortDirection } from '@material-ui/core';
import { DateTime } from 'luxon';
import { useHistory } from 'react-router';

import { useLocale } from 'hooks';
import {
  Card,
  CardHeader,
  Box,
  IconButton,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Checkbox,
  Typography,
} from 'ui/atoms';
import { ArrowDownIcon, ArrowUpIcon, ManageIcon, SearchIcon } from 'ui/atoms/icons';
import { AppRoute } from 'routing/AppRoute.enum';
import { ActionButtons } from 'app/insights/common/ActionButtons/ActionButtons';

import { useStyles } from './ChartTable.styles';
import { ChartTableItemType } from './ChartTable.types';

export const ChartTable = () => {
  const { push } = useHistory();
  const { formatMessage } = useLocale();
  const [sortBy, setSortBy] = useState('name');
  const [sort, setSort] = useState('desc');

  const classes = useStyles();

  const charts: ChartTableItemType[] = [
    {
      id: '0001',
      title: 'Monthly invoices',
    },
  ];

  const headCells = [
    {
      id: 'name',
      label: formatMessage({ id: 'insights.charts.name' }),
    },
    {
      id: 'dashboard',
      label: formatMessage({ id: 'insights.charts.dashboard' }),
    },
    {
      id: 'owned_by',
      label: formatMessage({ id: 'insights.charts.owned_by' }),
    },
    {
      id: 'last_updated',
      label: formatMessage({ id: 'insights.charts.last_updated' }),
    },
  ];

  const createSortHandler = (property: string) => (event: React.MouseEvent) => {
    if (sortBy === property) {
      setSort(sort === 'desc' ? 'asc' : 'desc');
    } else {
      setSortBy(property);
      setSort('desc');
    }
  };

  const navigateToDetail = (id: string) => {
    push(AppRoute.chartDetail.replace(':id', id));
  };

  return (
    <Card>
      <CardHeader
        title={formatMessage({ id: 'insights.standard_charts' })}
        action={
          <Box display="flex">
            <IconButton variant="roundedContained" size="small">
              <SearchIcon />
            </IconButton>
            <Box ml={1} />
            <IconButton variant="roundedContained" size="small">
              <ManageIcon />
            </IconButton>
          </Box>
        }
      />
      <CardContent>
        <Box display="flex" alignItems="center" className={classes.paddingLeftHalf}>
          <Checkbox />
          <Typography variant="h5" color="textSecondary">
            {formatMessage({ id: 'common.select_all' })}
          </Typography>
        </Box>
        <Table>
          <TableHead>
            <TableCell padding="checkbox">
              <Checkbox />
            </TableCell>
            {headCells.map((headCell, index) => (
              <TableCell
                key={index}
                sortDirection={sortBy === headCell.id ? (sort as SortDirection) : false}
                className={clsx(classes.columnHeader, sortBy === headCell.id && 'sorted')}
                onClick={createSortHandler(headCell.id)}
              >
                <Typography variant="h5" className={clsx(classes.inlineBlock, classes.marginRightOne)}>
                  {headCell.label}
                </Typography>
                {sortBy === headCell.id ? (
                  <>
                    {sort === 'desc' && (
                      <ArrowDownIcon color="primary" className={clsx(classes.columnHeaderIcon, classes.inlineBlock)} />
                    )}
                    {sort === 'asc' && (
                      <ArrowUpIcon color="primary" className={clsx(classes.columnHeaderIcon, classes.inlineBlock)} />
                    )}
                  </>
                ) : null}
              </TableCell>
            ))}
            <TableCell />
          </TableHead>
          <TableBody>
            {charts.map((chart, index) => (
              <TableRow key={index}>
                <TableCell padding="checkbox">
                  <Checkbox checked={false} inputProps={{ 'aria-labelledby': `insights-chart-checkbox-${chart.id}` }} />
                </TableCell>
                <TableCell className={classes.fontWeightMedium}>{chart.title}</TableCell>
                <TableCell className={classes.fontWeightMedium}>Invoices</TableCell>
                <TableCell className={classes.fontWeightMedium}>Roger Donin</TableCell>
                <TableCell>
                  <Typography variant="h5" className={classes.fontWeightMedium}>
                    {DateTime.local().toLocaleString(DateTime.DATE_SHORT)}
                  </Typography>
                  <Typography variant="h5">{DateTime.local().toLocaleString(DateTime.TIME_24_WITH_SECONDS)}</Typography>
                </TableCell>
                <TableCell>
                  <ActionButtons id={chart.id} onEditDetails={() => navigateToDetail(chart.id)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
