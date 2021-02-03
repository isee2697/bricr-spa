import React, { useState } from 'react';
import { SortDirection } from '@material-ui/core';
import clsx from 'classnames';

import { Box, Table, TableHead, TableRow, TableCell, Typography, TableBody } from 'ui/atoms';
import { ArrowDownIcon, ArrowUpIcon, CheckIcon, CloseIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';

import { ChecklistItem, ChecklistProps } from './Checklist.types';
import { useStyles } from './Checklist.styles';

export const Checklist = ({ items, emptyChecklist, onUpdateEmptyChecklist }: ChecklistProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [sortBy, setSortBy] = useState('section');
  const [sort, setSort] = useState('desc');

  const headCells = [
    {
      id: 'section',
      disablePadding: true,
      label: formatMessage({ id: 'pim_details.publication.funda.checklist.section' }),
    },
    {
      id: 'card',
      disablePadding: true,
      label: formatMessage({ id: 'pim_details.publication.funda.checklist.card' }),
    },
    {
      id: 'field',
      disablePadding: true,
      label: formatMessage({ id: 'pim_details.publication.funda.checklist.field' }),
    },
    {
      id: 'reason',
      disablePadding: true,
      label: formatMessage({ id: 'pim_details.publication.funda.checklist.reason' }),
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
    <>
      {(emptyChecklist || items.length === 0) && (
        <Box
          mt={4.5}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          className={classes.successPanel}
          onClick={() => onUpdateEmptyChecklist(!emptyChecklist)}
        >
          <Box display="flex" alignItems="center" justifyContent="center" className={classes.checkIcon}>
            <CheckIcon color="inherit" />
          </Box>
          <Box mt={1}>
            <Typography variant="h3" color="textSecondary" className={classes.fontWeightMedium}>
              {formatMessage({ id: 'pim_details.publication.funda.checklist.read_to_be_completed' })}
            </Typography>
          </Box>
        </Box>
      )}
      {!emptyChecklist && items.length > 0 && (
        <>
          <Box
            mt={4.5}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            className={classes.errorPanel}
            onClick={() => onUpdateEmptyChecklist(!emptyChecklist)}
          >
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.closeIcon}>
              <CloseIcon color="inherit" />
            </Box>
            <Box mt={1}>
              <Typography variant="h3" color="textSecondary" className={classes.fontWeightMedium}>
                {formatMessage(
                  { id: 'pim_details.publication.funda.checklist.complete_before_complete' },
                  {
                    items: (
                      <Typography variant="h3" color="textSecondary" className={classes.fontWeightBold}>
                        {items.length}
                      </Typography>
                    ),
                  },
                )}
              </Typography>
            </Box>
          </Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell />
                {headCells.map((headCell, index) => (
                  <TableCell
                    key={index}
                    sortDirection={sortBy === headCell.id ? (sort as SortDirection) : false}
                    className={clsx(classes.columnHeader, sortBy === headCell.id && 'sorted')}
                    onClick={createSortHandler(headCell.id)}
                  >
                    {headCell.label && (
                      <Typography variant="h5" className={clsx(classes.inlineBlock, classes.marginRightOne)}>
                        {headCell.label}
                      </Typography>
                    )}
                    {sortBy === headCell.id ? (
                      <>
                        {sort === 'desc' && (
                          <ArrowDownIcon
                            color="primary"
                            className={clsx(classes.columnHeaderIcon, classes.inlineBlock)}
                          />
                        )}
                        {sort === 'asc' && (
                          <ArrowUpIcon
                            color="primary"
                            className={clsx(classes.columnHeaderIcon, classes.inlineBlock)}
                          />
                        )}
                      </>
                    ) : (
                      <Box className={classes.columnSortIconPlaceholder} />
                    )}
                  </TableCell>
                ))}
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item: ChecklistItem, index: number) => (
                <TableRow className={classes.tableRow}>
                  <TableCell className={classes.tableCell}>{index + 1}</TableCell>
                  <TableCell className={classes.tableCell}>{item.section}</TableCell>
                  <TableCell className={classes.tableCell}>{item.card}</TableCell>
                  <TableCell className={classes.tableCell}>{item.field}</TableCell>
                  <TableCell className={classes.tableCell}>{item.reason}</TableCell>
                  <TableCell>
                    <ArrowDownIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}
    </>
  );
};
