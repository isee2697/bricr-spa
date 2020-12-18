import React, { useState } from 'react';
import clsx from 'classnames';
import { DateTime } from 'luxon';

import {
  Card,
  CardContent,
  CardHeader,
  Box,
  IconButton,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  Typography,
  Select,
  MenuItem,
} from 'ui/atoms';
import { useLocale } from 'hooks';
import { AddIcon, ArrowDownIcon, ArrowUpIcon, ManageIcon, MenuIcon } from 'ui/atoms/icons';
import { SortDirection } from 'api/types';
import { ActionTabs } from 'ui/molecules';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';

import { SettingsListProps, SettingsListStatus } from './SettingsList.types';
import { useStyles } from './SettingsList.styles';

export const SettingsList = ({ settings }: SettingsListProps) => {
  const { formatMessage } = useLocale();
  const [sortBy, setSortBy] = useState('lentDate');
  const [sort, setSort] = useState('desc');
  const classes = useStyles();
  const [status, setStatus] = useState<SettingsListStatus>(SettingsListStatus.Active);

  const headCells = [
    {
      id: 'startNumber',
      disablePadding: true,
      label: formatMessage({ id: 'settings.key_board.key_board_list.number' }),
    },
    {
      id: 'to',
      disablePadding: true,
      label: formatMessage({ id: 'settings.key_board.key_board_list.to' }),
    },
    {
      id: 'object',
      disablePadding: true,
      label: formatMessage({ id: 'settings.key_board.key_board_list.object' }),
    },
    {
      id: 'lentDate',
      disablePadding: true,
      label: formatMessage({ id: 'settings.key_board.key_board_list.lent' }),
    },
  ];

  const tabs: ActionTab[] = Object.keys(SettingsListStatus).map(value => ({
    value,
    label: formatMessage({ id: `common.status.${value}` }),
  }));

  const sortOptions = ['last_edited'];

  const createSortHandler = (property: string) => (event: React.MouseEvent) => {
    if (sortBy === property) {
      setSort(sort === 'desc' ? 'asc' : 'desc');
    } else {
      setSortBy(property);
      setSort('desc');
    }
  };

  return (
    <Card>
      <CardHeader
        title={formatMessage({ id: 'settings.key_board.key_board_list' })}
        action={
          <Box display="flex" alignItems="center">
            <IconButton variant="roundedContained" size="small" onClick={() => {}}>
              <ManageIcon />
            </IconButton>
            <Box ml={2} />
            <IconButton color="primary" variant="circle" size="small" onClick={() => {}}>
              <AddIcon />
            </IconButton>
          </Box>
        }
      />
      <CardContent>
        <ActionTabs tabs={tabs} onStatusChange={setStatus} status={status} />
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" alignItems="center" className={classes.marginLeftHalf}>
            <Checkbox />
            <Box ml={2} />
            <Typography variant="h5" color="textSecondary">
              {formatMessage({ id: 'common.select_all' })}
            </Typography>
          </Box>
          <Select variant="outlined" value={sortOptions[0]} className={classes.sort}>
            {sortOptions.map(option => (
              <MenuItem key={option} value={option}>
                {formatMessage({ id: `common.sort_option.${option}` })}
              </MenuItem>
            ))}
          </Select>
        </Box>
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
                  <Typography variant="h5" className={clsx(classes.inlineBlock, classes.marginRightOne)}>
                    {headCell.label}
                  </Typography>
                  {sortBy === headCell.id ? (
                    <>
                      {sort === 'desc' && (
                        <ArrowDownIcon
                          color="primary"
                          className={clsx(classes.columnHeaderIcon, classes.inlineBlock)}
                        />
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
            {settings.map((setting, index) => (
              <TableRow key={index}>
                <TableCell padding="checkbox">
                  <Checkbox checked={false} inputProps={{ 'aria-labelledby': setting.startNumber }} />
                </TableCell>
                <TableCell>
                  <Typography variant="h5" className={classes.fontWeightBold}>
                    {setting.startNumber}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5" className={classes.fontWeightBold}>
                    {setting.to}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5" className={classes.fontWeightBold}>
                    {setting.object}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box display="flex" justifyContent="space-between">
                    <Box>
                      <Typography variant="h5" className={classes.fontWeightBold}>
                        {setting.lentDate.toLocaleString(DateTime.DATE_SHORT)}
                      </Typography>
                      <Typography variant="h6">
                        {setting.lentDate.toLocaleString(DateTime.TIME_24_WITH_SECONDS)}
                      </Typography>
                    </Box>
                    <IconButton size="small" variant="rounded">
                      <MenuIcon />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
