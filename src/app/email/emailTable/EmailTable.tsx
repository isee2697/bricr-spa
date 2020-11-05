import React, { useState } from 'react';
import { SortDirection } from '@material-ui/core/TableCell';
import clsx from 'classnames';
import TableBody from '@material-ui/core/TableBody';

import { Table, TableHead, TableRow, TableCell, Checkbox, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { ArrowDownIcon, ArrowUpIcon, LinkIcon, PinIcon } from 'ui/atoms/icons';

import { EmailTableProps } from './EmailTable.types';
import { useStyles } from './EmailTable.styles';
import { EmailTableRow } from './EmailTableRow';

export const EmailTable = ({ emails, checkedItems, onCheckItem, onCheckAllItems }: EmailTableProps) => {
  const classes = useStyles();
  const [sortBy, setSortBy] = useState('name');
  const [sort, setSort] = useState('desc');
  const { formatMessage } = useLocale();
  const headCells = [
    {
      id: 'from',
      disablePadding: true,
      label: formatMessage({ id: 'email.table.from' }),
    },
    {
      id: 'pinned',
      disablePadding: true,
      icon: PinIcon,
    },
    {
      id: 'subject',
      label: formatMessage({ id: 'email.table.subject' }),
    },
    {
      id: 'links',
      disablePadding: true,
      icon: LinkIcon,
    },
    {
      id: 'date',
      disablePadding: true,
      label: formatMessage({ id: 'email.table.date' }),
    },
    {
      id: 'actions',
      disablePadding: true,
    },
  ];

  const createSortHandler = (property: string) => () => {
    if (property === 'actions') return;

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
            <Checkbox
              color="primary"
              checked={checkedItems.length === emails.length}
              onClick={() => onCheckAllItems()}
            />
          </TableCell>
          {headCells.map((headCell, index) => (
            <TableCell
              key={index}
              sortDirection={sortBy === headCell.id ? (sort as SortDirection) : false}
              className={clsx(classes.columnHeader, sortBy === headCell.id && 'sorted')}
              onClick={createSortHandler(headCell.id)}
              padding={headCell.disablePadding ? 'none' : 'default'}
            >
              {headCell.icon && (
                <headCell.icon
                  color={sortBy === headCell.id ? 'primary' : 'action'}
                  className={clsx(classes.columnHeaderIcon, classes.inlineBlock, classes.marginRightOne)}
                />
              )}
              {headCell.label && (
                <Typography variant="h5" className={clsx(classes.inlineBlock, classes.marginRightOne)}>
                  {headCell.label}
                </Typography>
              )}
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
        {emails.map(email => (
          <EmailTableRow key={email.id} email={email} checkedItems={checkedItems} onCheckItem={onCheckItem} />
        ))}
      </TableBody>
    </Table>
  );
};
