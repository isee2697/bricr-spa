import groupBy from 'lodash/groupBy';
import React from 'react';
import { DateTime } from 'luxon';

import { GroupTitle } from 'ui/organisms';
import { AgendaItem, Button, Card, CardActions, CardContent, CardHeader, Scrollable } from 'ui/atoms';
import { useLocale } from 'hooks';
import { AgendaItemProps } from 'ui/atoms/agendaItem/AgendaItem.types';

import { useStyles } from './Appointments.styles';

export const PimDetailsDashboardBoardsAgenda = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const dateFormat = 'd LLLL';

  const laterToday = new Date();
  laterToday.setHours(laterToday.getHours() + 2);
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const future = new Date();
  future.setDate(future.getDate() + 2);
  const agendaData = [
    {
      isAllDay: false,
      startDate: future.toISOString(),
      endDate: future.toISOString(),
      title: 'My Future appointment',
    },
    {
      isAllDay: false,
      startDate: new Date().toISOString(),
      endDate: laterToday.toISOString(),
      title: 'My Today appointment',
    },
    {
      isAllDay: false,
      startDate: new Date().toISOString(),
      endDate: laterToday.toISOString(),
      title: 'My Second Today appointment',
    },
    {
      isAllDay: false,
      startDate: new Date().toISOString(),
      endDate: laterToday.toISOString(),
      title: 'My Thirth Today appointment, which cant be moved',
    },
    {
      isAllDay: false,
      startDate: tomorrow.toISOString(),
      endDate: tomorrow.toISOString(),
      title: 'My Tomorrow appointment',
    },
    {
      isAllDay: false,
      startDate: tomorrow.toISOString(),
      endDate: tomorrow.toISOString(),
      title: 'My Tomorrow appointment 2',
    },
  ];

  const grouped = groupBy(agendaData, AgendaItem => {
    return DateTime.fromISO(AgendaItem.startDate).toFormat(dateFormat);
  });

  const sortedByDate = Object.keys(grouped).sort((dateA, dateB) => {
    return DateTime.fromString(dateA, dateFormat) > DateTime.fromString(dateB, dateFormat) ? 1 : -1;
  });

  const getGroupAgendaItems = (items: AgendaItemProps[]) => {
    return items.map((itemProps, key) => <AgendaItem key={key} {...itemProps} />);
  };

  return (
    <Card className={classes.root}>
      <CardHeader title={formatMessage({ id: 'pim_details.dashboard.brokers' })} />
      <CardContent>
        <Scrollable className={classes.scrollable} width="auto" height={333}>
          {sortedByDate.map((dateGroup, key) => {
            return (
              <div className={classes.group} key={key}>
                <GroupTitle date={dateGroup} dateFormat={dateFormat} />
                {getGroupAgendaItems(grouped[dateGroup])}
              </div>
            );
          })}
        </Scrollable>
      </CardContent>
      <CardActions>
        <Button fullWidth className={classes.moreButton} onClick={() => {}}>
          {formatMessage({ id: 'date.view_more' })}
        </Button>
      </CardActions>
    </Card>
  );
};
