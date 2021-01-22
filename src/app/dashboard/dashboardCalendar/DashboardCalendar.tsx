import React from 'react';
import { useTheme } from '@material-ui/core';
import groupBy from 'lodash/groupBy';
import { DateTime } from 'luxon';

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  AgendaItem,
  Scrollable,
  Badge,
  Typography,
  Box,
  Placeholder,
} from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AgendaItemProps } from 'ui/atoms/agendaItem/AgendaItem.types';
import { GroupTitle } from 'ui/organisms';
import { InfoSection } from 'ui/molecules';

import { useStyles } from './DashboardCalendar.styles';
import { DashboardCalendarProps } from './DashboardCalendar.types';

export const DashboardCalendar = ({ onMoreClick, data, loading }: DashboardCalendarProps) => {
  const theme = useTheme();
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
          <Badge badgeContent={data.length} color="error" classes={{ badge: classes.badge }}>
            <Typography variant="h2">{formatMessage({ id: 'calendar.title' })}</Typography>
          </Badge>
        }
      />
      <CardContent>
        {loading ? (
          <Box height={theme.spacing(40)}>
            <Placeholder height={theme.spacing(2)} />
            <Box mt={0.5} />
            <Placeholder height={theme.spacing(1)} />
            <Box mt={1.5} />
            <Placeholder height={theme.spacing(2)} />
            <Box mt={0.5} />
            <Placeholder height={theme.spacing(1)} />
            <Box mt={1.5} />
            <Placeholder height={theme.spacing(2)} />
            <Box mt={0.5} />
            <Placeholder height={theme.spacing(1)} />
          </Box>
        ) : data.length ? (
          <Scrollable className={classes.scrollable} width="auto" height={theme.spacing(40)}>
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
          {formatMessage({ id: 'dashboard.calendar.view_all_appointments' })}
        </Button>
      </CardActions>
    </Card>
  );
};
