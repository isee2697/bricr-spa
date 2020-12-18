import React from 'react';
import clsx from 'classnames';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Box, Button, Typography, UserAvatar, Table, TableHead, TableRow, TableCell, TableBody } from 'ui/atoms';

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
              {formatMessage({ id: 'crm.details.business_journey.date' })}
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              {formatMessage({ id: 'crm.details.business_journey.location' })}
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              {formatMessage({ id: 'crm.details.business_journey.broker' })}
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              {formatMessage({ id: 'crm.details.business_journey.status' })}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {brokerages.map((brokerage, index) => (
            <TableRow key={index}>
              <TableCell
                className={clsx(
                  classes.tableCellDate,
                  index === brokerages.length - 1 && classes.tableCellNoBorderBottom,
                )}
              >
                {brokerage.dateCreated.toFormat('dd-MM-yyyy HH:mm')}
              </TableCell>
              <TableCell
                className={clsx(
                  classes.tableCellLocation,
                  index === brokerages.length - 1 && classes.tableCellNoBorderBottom,
                )}
              >
                {brokerage.location}
              </TableCell>
              <TableCell className={clsx(index === brokerages.length - 1 && classes.tableCellNoBorderBottom)}>
                <Box className={classes.avatarWithName}>
                  <UserAvatar
                    name={brokerage.broker.username}
                    avatar={brokerage.broker.avatar}
                    className={classes.avatarIcon}
                  />{' '}
                  {brokerage.broker?.username}
                </Box>
              </TableCell>
              <TableCell className={clsx(index === brokerages.length - 1 && classes.tableCellNoBorderBottom)}>
                <Typography className={clsx(classes.tableCellStatus, brokerage.status !== 'approved' && 'error')}>
                  {formatMessage({ id: `crm.details.business_journey.status.${brokerage.status}` })}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box className={classes.actions}>
        <Button variant="outlined" color="secondary" className={classes.actionButtons}>
          {formatMessage({ id: 'crm.details.business_journey.actions.reject' })}
        </Button>
        <Button variant="contained" color="primary" className={classes.actionButtons}>
          {formatMessage({ id: 'crm.details.business_journey.actions.accept' })}
        </Button>
      </Box>
    </>
  );
};
