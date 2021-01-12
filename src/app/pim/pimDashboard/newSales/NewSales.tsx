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

import { NewSalesItem, NewSalesProps } from './NewSales.types';
import { useStyles } from './NewSales.styles';

export const NewSales = ({ items }: NewSalesProps) => {
  const { push } = useHistory();
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const handleNavigateToPropertyJourney = (item: NewSalesItem) => {
    push(`${joinUrlParams(AppRoute.pimDetails, { id: `${item.id}` })}/propertyJourney`);
  };

  return (
    <Card>
      <CardHeader title={formatMessage({ id: 'pim.dashboard.new_sales' })} />
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
            <TableCell />
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
                <TableCell className={classes.tableCell} onClick={() => handleNavigateToPropertyJourney(item)}>
                  <Typography variant="h5" color="textSecondary" className={classes.fontWeightBold}>
                    {item.address}
                  </Typography>
                </TableCell>
                <TableCell className={classes.tableCell} onClick={() => handleNavigateToPropertyJourney(item)}>
                  <Typography variant="h5" color="textSecondary" className={classes.fontWeightBold}>
                    € {item.bidding}
                  </Typography>
                </TableCell>
                <TableCell className={classes.tableCell} onClick={() => handleNavigateToPropertyJourney(item)}>
                  <Typography variant="h5">
                    <Avatar variant="square" src={'http://placeimg.com/130/27/arch'} className={classes.graph} />
                  </Typography>
                </TableCell>
                <TableCell className={classes.tableCell} onClick={() => handleNavigateToPropertyJourney(item)}>
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
