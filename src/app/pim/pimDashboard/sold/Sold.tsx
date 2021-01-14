import React from 'react';
import { useHistory } from 'react-router-dom';

import { useLocale } from 'hooks';
import { Avatar, Card, CardContent, CardHeader, Table, TableBody, TableCell, TableRow, Typography } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { joinUrlParams } from 'routing/AppRoute.utils';

import { SoldItem, SoldProps } from './Sold.types';
import { useStyles } from './Sold.styles';

export const Sold = ({ items }: SoldProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const { push } = useHistory();

  const handleNavigateToPropertyJourney = (item: SoldItem) => {
    push(`${joinUrlParams(AppRoute.pimDetails, { id: `${item.id}` })}/propertyJourney`);
  };

  return (
    <Card>
      <CardHeader title={formatMessage({ id: 'pim.dashboard.sold' })} />
      <CardContent>
        <Table>
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
                  <Typography variant="h5" color="textSecondary" className={classes.fontWeightBold}>
                    € {item.price}
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
