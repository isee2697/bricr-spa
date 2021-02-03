import React, { useCallback, useState } from 'react';
import { SortDirection, TableBody } from '@material-ui/core';
import clsx from 'classnames';

import { useLocale } from 'hooks';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  IconButton,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Box,
} from 'ui/atoms';
import { ArrowDownIcon, ArrowUpIcon, ClockIcon, ManageIcon } from 'ui/atoms/icons';
import { ListOptionsMenu } from 'ui/molecules';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';

import { AvailableMediaHeader, AvailableMediaItem } from './settingsAvailableMedia.types';
import { useStyles } from './SettingsAvailableMedia.styles';

export const SettingsAvailableMedia = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [sortBy, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(false);
  const [selected, setSelected] = useState<string[]>([]);

  const items: AvailableMediaItem[] = [
    {
      id: '0001',
      type: 'Video',
      content: 'http://placeimg.com/73/36/arch',
      description: 'Bathroom',
      link: 'http://www.bathroom.com',
    },
    {
      id: '0002',
      type: 'Video',
      content: 'http://placeimg.com/73/36/arch',
      description: 'Bathroom',
    },
    {
      id: '0003',
      type: 'Video',
      content: 'http://placeimg.com/73/36/arch',
    },
    {
      id: '0004',
      type: 'Video',
    },
  ];

  const headerCells = [
    {
      field: 'type',
      label: formatMessage({ id: `pim_details.publication.funda.settings.available_media.type` }),
      sortable: true,
    },
    {
      field: 'content',
      label: formatMessage({ id: `pim_details.publication.funda.settings.available_media.content` }),
      sortable: true,
    },
    {
      field: 'description',
      label: formatMessage({ id: `pim_details.publication.funda.settings.available_media.description` }),
      sortable: true,
    },
    {
      field: 'link',
      label: formatMessage({ id: `pim_details.publication.funda.settings.available_media.link` }),
      sortable: true,
    },
  ];

  const onSort = (column: string) => {
    let direction: SortDirection = 'asc';

    if (sortBy !== column) {
      setSortColumn(column);
    } else if (sortDirection === direction) {
      direction = 'desc';
    }

    setSortDirection(direction);
  };

  const renderCell = useCallback((media: AvailableMediaItem, cell: AvailableMediaHeader) => {
    if (cell === 'content') {
      return !!media[cell] ? <Avatar src={media[cell]} /> : '-';
    }

    return media[cell] || '-';
  }, []);

  const handleSelectItem = (itemId: string) => {
    const index = selected.findIndex(id => id === itemId);

    if (index >= 0) {
      setSelected(selected.filter(id => id !== itemId));
    } else {
      setSelected([...selected, itemId]);
    }
  };

  return (
    <Card>
      <CardHeader
        title={formatMessage({ id: 'pim_details.publication.funda.settings.available_media.title' })}
        action={
          <IconButton size="small" variant="roundedContained">
            <ManageIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox" className={classes.tableHeaderCell} />
              {headerCells.map(cell => (
                <TableCell
                  key={cell.field}
                  sortDirection={sortBy === cell.field ? (sortDirection as SortDirection) : false}
                  className={clsx(classes.tableHeaderCell, sortBy === cell.field && 'sorted')}
                  onClick={() => (cell.sortable ? onSort(cell.field) : null)}
                >
                  <Typography variant="h5" component="span" className={classes.columnHeaderLabel}>
                    {cell.label}
                  </Typography>
                  {sortBy === cell.field ? (
                    <>
                      {sortDirection === 'desc' && (
                        <ArrowDownIcon color="primary" className={classes.columnHeaderIcon} />
                      )}
                      {sortDirection === 'asc' && <ArrowUpIcon color="primary" className={classes.columnHeaderIcon} />}
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
            {items.map((item, index) => (
              <TableRow key={index} className={classes.tableRow}>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    checked={selected.includes(item.id)}
                    inputProps={{ 'aria-labelledby': item.id }}
                    onClick={e => {
                      e.stopPropagation();
                      handleSelectItem(item.id);
                    }}
                  />
                </TableCell>
                {headerCells.map((cell, index) => (
                  <TableCell key={index}>{renderCell(item, cell.field as AvailableMediaHeader)}</TableCell>
                ))}
                <TableCell>
                  <ListOptionsMenu id={item.id} onEditClick={() => {}} onDeleteClick={() => {}}>
                    <ListOptionsMenuItem
                      title={formatMessage({
                        id: 'common.archive',
                      })}
                      icon={<ClockIcon />}
                      onClick={() => {}}
                    />
                  </ListOptionsMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
