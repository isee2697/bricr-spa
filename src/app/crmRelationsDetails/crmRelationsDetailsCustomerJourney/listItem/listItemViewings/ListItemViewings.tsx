import React from 'react';
import clsx from 'classnames';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Box, Button, Typography, UserAvatar } from 'ui/atoms';

import { ListItemViewingsProps } from './ListItemViewings.types';
import { useStyles } from './ListItemViewings.styles';

export const ListItemViewings = ({ brokerages }: ListItemViewingsProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>
              {formatMessage({ id: 'crm.details.customer_journey.date' })}
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              {formatMessage({ id: 'crm.details.customer_journey.location' })}
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              {formatMessage({ id: 'crm.details.customer_journey.broker' })}
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              {formatMessage({ id: 'crm.details.customer_journey.status' })}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {brokerages.map((brokerage, index) => (
            <TableRow key={index}>
              <TableCell className={classes.tableCellDate}>
                {brokerage.dateCreated.toFormat('dd-MM-yyyy HH:mm')}
              </TableCell>
              <TableCell className={classes.tableCellLocation}>{brokerage.location}</TableCell>
              <TableCell>
                <Box className={classes.avatarWithName}>
                  <UserAvatar
                    name={brokerage.broker.username}
                    avatar={brokerage.broker.avatar}
                    className={classes.avatarIcon}
                  />{' '}
                  {brokerage.broker?.username}
                </Box>
              </TableCell>
              <TableCell>
                <Typography className={clsx(classes.tableCellStatus, brokerage.status !== 'approved' && 'error')}>
                  {formatMessage({ id: `crm.details.customer_journey.status.${brokerage.status}` })}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box className={classes.actions}>
        <Button variant="outlined" color="secondary" className={classes.actionButtons}>
          {formatMessage({ id: 'crm.details.customer_journey.actions.reject' })}
        </Button>
        <Button variant="contained" color="primary" className={classes.actionButtons}>
          {formatMessage({ id: 'crm.details.customer_journey.actions.accept' })}
        </Button>
      </Box>
    </>
  );
};
