import React, { useState } from 'react';
import clsx from 'classnames';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell, { SortDirection } from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

import { Checkbox, Typography, UserAvatar } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { TasksIcon, UserIcon, BuildingIcon, HistoryIcon, StatusIcon, ArrowDownIcon, ArrowUpIcon } from 'ui/atoms/icons';
import { TasksStatusBadge } from '../tasksStatusBadge/TasksStatusBadge';

import { TasksListProps } from './TasksList.types';
import { useStyles } from './TasksList.styles';

export const TasksList = ({ tasks }: TasksListProps) => {
  const [sortBy, setSortBy] = useState('name');
  const [sort, setSort] = useState('desc');
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const headCells = [
    { id: 'name', disablePadding: true, label: 'Task name', icon: TasksIcon },
    { id: 'assign', disablePadding: true, label: 'Assign', icon: UserIcon },
    { id: 'number', disablePadding: true, label: 'Number', icon: BuildingIcon },
    {
      id: 'deadline',
      disablePadding: true,
      label: 'Deadline',
      icon: HistoryIcon,
    },
    { id: 'status', disablePadding: true, label: 'Status', icon: StatusIcon },
  ];

  const createSortHandler = (property: string) => (event: React.MouseEvent) => {
    if (sortBy === property) {
      setSort(sort === 'desc' ? 'asc' : 'desc');
    } else {
      setSortBy(property);
      setSort('desc');
    }
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
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
              {headCell.icon && (
                <headCell.icon
                  color={sortBy === headCell.id ? 'primary' : 'action'}
                  className={clsx(classes.columnHeaderIcon, classes.inlineBlock, classes.marginRightOne)}
                />
              )}
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
        </TableRow>
      </TableHead>
      <TableBody>
        {tasks.map((task, index) => {
          const labelId = `tasks-list-checkbox-${index}`;
          const { title, status, id, expireDate, assignedTo } = task;
          const hoursLeft = dateDiffInHours(new Date(), expireDate);

          return (
            <TableRow key={index}>
              <TableCell padding="checkbox">
                <Checkbox checked={false} inputProps={{ 'aria-labelledby': labelId }} />
              </TableCell>
              <TableCell component="th" id={labelId} scope="row" padding="none">
                {title}
              </TableCell>
              <TableCell>
                <UserAvatar name={assignedTo.name} className={classes.avatar} />
              </TableCell>
              <TableCell>{id}</TableCell>
              <TableCell>
                {hoursLeft < 0 && '-'}
                {hoursLeft >= 24 && formatMessage({ id: 'tasks.days_left' }, { daysLeft: Math.floor(hoursLeft / 24) })}
                {hoursLeft >= 1 && hoursLeft < 24 && formatMessage({ id: 'tasks.hours_left' }, { hoursLeft })}
                {hoursLeft === 0 && (
                  <span className={classes.orange}>{formatMessage({ id: 'tasks.less_than_one_hour' })}</span>
                )}
              </TableCell>
              <TableCell>
                <TasksStatusBadge status={status} />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

const dateDiffInHours = (date1: Date, date2: Date) => {
  const dt1 = new Date(date1);
  const dt2 = new Date(date2);

  return Math.floor(
    (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate(), dt2.getHours()) -
      Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate(), dt1.getHours())) /
      (1000 * 60 * 60),
  );
};
