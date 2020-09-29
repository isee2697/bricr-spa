import React from 'react';
import clsx from 'classnames';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Box, Button, Typography, Table, TableCell, TableBody, TableHead, TableRow } from 'ui/atoms';

import { ListItemBiddingsProps } from './ListItemBiddings.types';
import { useStyles } from './ListItemBiddings.styles';

export const ListItemBiddings = ({ counters }: ListItemBiddingsProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>
              {formatMessage({ id: 'crm.details.customer_journey.current_offer' })}
            </TableCell>
            <TableCell className={classes.tableHeaderCell} />
            <TableCell className={classes.tableHeaderCell}>
              {formatMessage({ id: 'crm.details.customer_journey.counter_offer' })}
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              {formatMessage({ id: 'crm.details.customer_journey.conditions' })}
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              {formatMessage({ id: 'crm.details.customer_journey.status' })}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {counters.map((counter, index) => (
            <TableRow key={index}>
              <TableCell className={clsx(index === counters.length - 1 && classes.tableCellNoBorderBottom)}>
                <Typography variant="h4" className={classes.fontWeightMedium}>
                  € {counter.offer}
                </Typography>
                <Typography variant="h6" className={classes.gray}>
                  {counter.offerDate.toFormat('dd-MM-yyyy')}
                </Typography>
              </TableCell>
              <TableCell
                className={clsx(
                  classes.offerDiff,
                  counter.offer - counter.counterOffer > 0 ? classes.red : classes.green,
                  index === counters.length - 1 && classes.tableCellNoBorderBottom,
                )}
              >
                {counter.counterOffer - counter.offer > 0
                  ? `- € ${counter.counterOffer - counter.offer}`
                  : `+ € ${counter.offer - counter.counterOffer}`}
              </TableCell>
              <TableCell className={clsx(index === counters.length - 1 && classes.tableCellNoBorderBottom)}>
                <Typography variant="h4" className={clsx(classes.primary, classes.fontWeightMedium)}>
                  € {counter.counterOffer}
                </Typography>
                <Typography variant="h6" className={classes.gray}>
                  {counter.counterOfferDate.toFormat('dd-MM-yyyy')}
                </Typography>
              </TableCell>
              <TableCell className={clsx(index === counters.length - 1 && classes.tableCellNoBorderBottom)}>
                <Typography
                  variant="h6"
                  className={clsx(counter.conditions.takeOverListOfCases && classes.conditionUnavailable)}
                >
                  {formatMessage({ id: 'crm.details.customer_journey.condition.take_over_list_of_cases' })}
                </Typography>
                <Typography
                  variant="h6"
                  className={clsx(counter.conditions.technicalBuildingInspection && classes.conditionUnavailable)}
                >
                  {formatMessage({ id: 'crm.details.customer_journey.condition.technical_building_inspection' })}
                </Typography>
                <Typography
                  variant="h6"
                  className={clsx(counter.conditions.reservationOfFunding && classes.conditionUnavailable)}
                >
                  {formatMessage({ id: 'crm.details.customer_journey.condition.reservation_of_funding' })}
                </Typography>
              </TableCell>
              <TableCell className={clsx(index === counters.length - 1 && classes.tableCellNoBorderBottom)}>
                <Typography className={clsx(classes.tableCellStatus, counter.status === 'counter' && 'error')}>
                  {formatMessage({ id: `crm.details.customer_journey.status.${counter.status}` })}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box className={classes.actions}>
        <Button variant="outlined" color="secondary" className={classes.actionButtons}>
          {formatMessage({ id: 'crm.details.customer_journey.actions.counter_or_reject_offer' })}
        </Button>
        <Button variant="contained" color="primary" className={classes.actionButtons}>
          {formatMessage({ id: 'crm.details.customer_journey.actions.accept_offer' })}
        </Button>
      </Box>
    </>
  );
};
