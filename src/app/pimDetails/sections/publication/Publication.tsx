import React, { useState } from 'react';
import { SortDirection } from '@material-ui/core';
import clsx from 'classnames';
import { DateTime } from 'luxon';
import { useHistory, useParams } from 'react-router-dom';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Grid,
  IconButton,
  MenuItem,
  NavBreadcrumbs,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from 'ui/atoms';
import { AddIcon, ArrowDownIcon, ArrowUpIcon, CheckIcon, CloseIcon, ManageIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { useLocale, useModalDispatch } from 'hooks';
import { AddPublicationModal } from '../../addPublicationModal/AddPublicationModal';
import { ActionTabs, InfoSection } from 'ui/molecules';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';
import { SortOption } from 'ui/molecules/list/List.types';
import { joinUrlParams } from '../../../../routing/AppRoute.utils';
import { AppRoute } from '../../../../routing/AppRoute.enum';

import { PublicationProps, PublicationStatus } from './Publication.types';
import { useStyles } from './Publication.styles';
import { PublicationRowActionButtons } from './PublicationRowActionButtons/PublicationRowActionButtons';

export const Publication = ({
  title,
  onSidebarOpen,
  isSidebarVisible,
  onAddNewPublication,
  onDelete,
  items = [],
}: PublicationProps) => {
  const { formatMessage } = useLocale();
  const { open } = useModalDispatch();
  const [status, setStatus] = useState<'active' | 'inactive'>('active');
  const [sortBy, setSortBy] = useState('name');
  const [sort, setSort] = useState('desc');
  const [sorting, setSorting] = useState('last_edited');
  const classes = useStyles();
  const { push } = useHistory();
  const { id } = useParams<{ id: string }>();

  const tabs: ActionTab[] = [
    {
      value: 'active',
      label: formatMessage({ id: 'common.active' }),
      amount: items.filter(item => item.isActive).length,
    },
    {
      value: 'inactive',
      label: formatMessage({ id: 'common.inactive' }),
      amount: items.filter(item => !item.isActive).length,
    },
  ];

  const sortOptions: SortOption[] = [
    {
      name: formatMessage({ id: 'common.sort_option.last_edited' }),
      key: 'last_edited',
    },
  ];

  const headCells = [
    {
      id: 'name',
      label: formatMessage({ id: 'pim_details.publication.name' }),
    },
    {
      id: 'start_date',
      label: formatMessage({ id: 'pim_details.publication.start_date' }),
    },
    {
      id: 'end_date',
      label: formatMessage({ id: 'pim_details.publication.end_date' }),
    },
    {
      id: 'status',
      label: formatMessage({ id: 'pim_details.publication.status' }),
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

  return (
    <>
      <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
        <NavBreadcrumbs />
        <Button
          size="small"
          variant="contained"
          color="primary"
          startIcon={<AddIcon color="inherit" />}
          onClick={() => open('add-new-publication')}
        >
          {formatMessage({ id: 'pim_details.publication.add_publication' })}
        </Button>
      </Box>
      <Page title={title} titleActions={<></>}>
        <Grid item xs={12}>
          {items.length === 0 && (
            <Card>
              <CardContent>
                <InfoSection emoji="🤔">
                  <Typography variant="h3">
                    {formatMessage({
                      id: 'pim_details.publication.empty_title',
                    })}
                  </Typography>
                  <Typography variant="h3">
                    {formatMessage({
                      id: 'pim_details.publication.empty_description',
                    })}
                  </Typography>
                </InfoSection>
              </CardContent>
            </Card>
          )}
          {items.length > 0 && (
            <Card>
              <CardHeader
                title={formatMessage({ id: 'pim_details.publication.publication_online' })}
                action={
                  <IconButton size="small" variant="rounded">
                    <ManageIcon />
                  </IconButton>
                }
              />
              <CardContent>
                <ActionTabs status={status} onStatusChange={setStatus} tabs={tabs} />
                <Box mt={2} display="flex" alignItems="center" justifyContent="space-between">
                  <Box display="flex" alignItems="center" className={classes.paddingLeftHalf}>
                    <Checkbox />
                    <Typography variant="h5" color="textSecondary">
                      {formatMessage({ id: 'common.select_all' })}
                    </Typography>
                  </Box>
                  <Select
                    className={clsx(classes.sorting, 'sort-select')}
                    variant="outlined"
                    value={sorting}
                    onChange={event => {
                      const value = event?.target.value as string;
                      setSorting(value);
                    }}
                  >
                    {sortOptions.map(({ key, name }) => (
                      <MenuItem key={key} value={key}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
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
                        <Box display="flex" alignItems="center">
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
                                <ArrowUpIcon
                                  color="primary"
                                  className={clsx(classes.columnHeaderIcon, classes.inlineBlock)}
                                />
                              )}
                            </>
                          ) : (
                            <Box className={classes.columnSortIconPlaceholder} />
                          )}
                        </Box>
                      </TableCell>
                    ))}
                    <TableCell />
                  </TableHead>
                  <TableBody>
                    {items
                      .filter(item => item.isActive === (status === 'active'))
                      .map((item, index) => (
                        <TableRow
                          key={index}
                          className={classes.row}
                          onClick={() =>
                            push(
                              joinUrlParams(`${AppRoute.pimDetails}/publication/:publicationId`, {
                                id,
                                publicationId: `${item.id}`,
                              }),
                            )
                          }
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              checked={false}
                              inputProps={{ 'aria-labelledby': `insights-chart-checkbox-${item.id}` }}
                            />
                          </TableCell>
                          <TableCell className={classes.fontWeightMedium}>{item.name}</TableCell>
                          <TableCell className={classes.fontWeightMedium}>
                            {item.startDate.toLocaleString(DateTime.DATE_SHORT)}
                          </TableCell>
                          <TableCell className={classes.fontWeightMedium}>
                            {!!item.endDate ? item.endDate.toLocaleString(DateTime.DATE_SHORT) : '-'}
                          </TableCell>
                          <TableCell>
                            {item.status === PublicationStatus.Success ? (
                              <Box className={classes.success}>
                                <CheckIcon color="inherit" />
                              </Box>
                            ) : item.status === PublicationStatus.Warning ? (
                              <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                className={classes.warning}
                              >
                                !
                              </Box>
                            ) : (
                              <Box className={classes.error}>
                                <CloseIcon color="inherit" />
                              </Box>
                            )}
                          </TableCell>
                          <TableCell>
                            <PublicationRowActionButtons
                              id={`${item.id}`}
                              onDelete={() => {
                                onDelete(item.id);
                              }}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}
        </Grid>
      </Page>
      <AddPublicationModal onAddNewPublication={onAddNewPublication} />
    </>
  );
};
