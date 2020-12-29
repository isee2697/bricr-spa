import React from 'react';
import groupBy from 'lodash/groupBy';
import { DateTime } from 'luxon';

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Button,
  AgendaItem,
  Scrollable,
  Badge,
  Typography,
} from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AgendaItemProps } from 'ui/atoms/agendaItem/AgendaItem.types';
import { GroupTitle } from 'ui/organisms';
import { ManageIcon } from 'ui/atoms/icons';
import { InfoSection } from 'ui/molecules';

import { useStyles } from './DashboardCalendar.styles';
import { DashboardCalendarProps } from './DashboardCalendar.types';

export const DashboardCalendar = ({ onMoreClick, data }: DashboardCalendarProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const dateFormat = 'd LLLL';

  const grouped = groupBy(data, AgendaItem => {
    return DateTime.fromISO(AgendaItem.startDate).toFormat(dateFormat);
  });

  const sortedByDate = Object.keys(grouped).sort((dateA, dateB) => {
    return DateTime.fromString(dateA, dateFormat) > DateTime.fromString(dateB, dateFormat) ? 1 : -1;
  });

  const getGroupAgendaItems = (items: AgendaItemProps[]) => {
    return items.map((itemProps, key) => <AgendaItem key={key} {...itemProps} />);
  };

  return (
    <Card>
      <CardHeader
        title={
          <Badge badgeContent={data.length} color="error">
            <Typography variant="h2">{formatMessage({ id: 'dashboard.calendar.title' })}</Typography>
          </Badge>
        }
        action={
          <IconButton size="small" variant="roundedContained">
            <ManageIcon />
          </IconButton>
        }
      />
      <CardContent>
        {data.length ? (
          <Scrollable className={classes.scrollable} width="auto" height={342}>
            {sortedByDate.map((dateGroup, key) => {
              return (
                <div className={classes.group} key={key}>
                  <GroupTitle date={dateGroup} dateFormat={dateFormat} />
                  {getGroupAgendaItems(grouped[dateGroup])}
                </div>
              );
            })}
          </Scrollable>
        ) : (
          <InfoSection emoji="🤔">
            <Typography variant="h3">
              {formatMessage({
                id: 'dashboard.agenda.empty_title',
              })}
            </Typography>
            <Typography variant="h3">
              {formatMessage({
                id: 'dashboard.agenda.empty_description',
              })}
            </Typography>
          </InfoSection>
        )}
      </CardContent>
      <CardActions>
        <Button fullWidth className={classes.moreButton} onClick={onMoreClick}>
          {formatMessage({ id: 'dashboard.calendar.view_more' })}
        </Button>
      </CardActions>
    </Card>
  );
};
