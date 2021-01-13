import React from 'react';
import { DateTime } from 'luxon';
import { useHistory } from 'react-router-dom';

import { useLocale } from 'hooks';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { joinUrlParams } from 'routing/AppRoute.utils';

import { NewBiddingsItem, NewBiddingsProps } from './NewBiddings.types';
import { useStyles } from './NewBiddings.styles';

export const NewBiddings = ({ items }: NewBiddingsProps) => {
  const { push } = useHistory();
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const handleNavigateToPropertyJourney = (item: NewBiddingsItem) => {
    push(`${joinUrlParams(AppRoute.pimDetails, { id: `${item.id}` })}/propertyJourney`);
  };

  return (
    <Card>
      <CardHeader title={formatMessage({ id: 'pim.dashboard.new_biddings' })} />
      <CardContent>
        <Table>
          <TableHead>
            <TableCell />
            <TableCell>
              <Typography variant="caption" color="textSecondary">
                {formatMessage({ id: 'pim.dashboard.pim' })}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="caption" color="textSecondary">
                {formatMessage({ id: 'pim.dashboard.bidding' })}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="caption" color="textSecondary">
                {formatMessage({ id: 'common.date' })}
              </Typography>
            </TableCell>
          </TableHead>
          <TableBody>
            {items.map((item, index) => (
              <TableRow key={index} className={classes.tableRow}>
                <TableCell className={classes.tableCell} onClick={() => handleNavigateToPropertyJourney(item)}>
                  <Avatar variant="rounded" src={item.image} className={classes.avatar} />
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <Typography variant="h5" color="textSecondary" className={classes.fontWeightBold}>
                    {item.address}
                  </Typography>
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <Typography variant="h5" color="textSecondary" className={classes.fontWeightBold}>
                    € {item.bidding}
                  </Typography>
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <Typography variant="h5" color="textSecondary" className={classes.fontWeightBold}>
                    {item.date.toLocaleString(DateTime.DATE_SHORT)}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
