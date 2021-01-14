import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { useHistory } from 'react-router-dom';

import { useLocale } from 'hooks';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  UserAvatar,
} from 'ui/atoms';
import { ArrowDownIcon, ArrowUpIcon, MenuIcon } from 'ui/atoms/icons';
import { AppRoute } from 'routing/AppRoute.enum';
import { joinUrlParams } from 'routing/AppRoute.utils';

import { NewInterestsItem, NewInterestsProps } from './NewInterests.types';
import { useStyles } from './NewInterests.styles';

export const NewInterests = ({ items }: NewInterestsProps) => {
  const { push } = useHistory();
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [expandedItem, setExpandedItem] = useState(-1);

  const handleNavigateToPropertyJourney = (item: NewInterestsItem) => {
    push(`${joinUrlParams(AppRoute.pimDetails, { id: `${item.id}` })}/propertyJourney`);
  };

  return (
    <Card>
      <CardHeader title={formatMessage({ id: 'pim.dashboard.new_interests' })} />
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
                {formatMessage({ id: 'pim.dashboard.interests' })}
              </Typography>
            </TableCell>
            <TableCell />
            <TableCell>
              <Typography variant="caption" color="textSecondary">
                {formatMessage({ id: 'common.date' })}
              </Typography>
            </TableCell>
            <TableCell />
          </TableHead>
          <TableBody>
            {items.map((item, index) => (
              <>
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
                      {item.interests}
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
                    <Typography variant="h6" color="textSecondary">
                      {item.date.toLocaleString(DateTime.TIME_24_WITH_SECONDS)}
                    </Typography>
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    <IconButton
                      variant="rounded"
                      size="small"
                      onClick={() => setExpandedItem(index === expandedItem ? -1 : index)}
                    >
                      {index === expandedItem ? <ArrowUpIcon /> : <ArrowDownIcon />}
                    </IconButton>
                  </TableCell>
                </TableRow>
                {index === expandedItem && (
                  <TableRow>
                    <TableCell />
                    <TableCell colSpan={4}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell padding="checkbox">
                              <Checkbox color="primary" />
                            </TableCell>
                            <TableCell colSpan={3}>
                              <Typography variant="h5">{formatMessage({ id: 'common.select_all' })}</Typography>
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow className={classes.tableRow}>
                            <TableCell padding="checkbox" className={classes.tableCell}>
                              <Checkbox color="primary" />
                            </TableCell>
                            <TableCell className={classes.tableCell}>
                              <Box display="flex" alignItems="center">
                                <UserAvatar avatar={'http://placeimg.com/40/40/arch'} name={'Tjeerd Diepstraten'} />
                                <Box ml={2} />
                                <Typography variant="h6">Tjeerd Diepstraten</Typography>
                              </Box>
                            </TableCell>
                            <TableCell className={classes.tableCell}>
                              <Box display="flex" alignItems="center">
                                <UserAvatar avatar={'http://placeimg.com/40/40/arch'} name={'J. Flachorst'} />
                                <Box ml={2} />
                                <Typography variant="h6">J. Flachorst</Typography>
                              </Box>
                            </TableCell>
                            <TableCell className={classes.tableCell}>
                              <IconButton size="small" variant="rounded">
                                <MenuIcon />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableCell>
                    <TableCell />
                  </TableRow>
                )}
              </>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
