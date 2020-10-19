import groupBy from 'lodash/groupBy';
import React, { useState } from 'react';
import { DateTime } from 'luxon';

import { GroupTitle } from 'ui/organisms';
import { AgendaItem, Button, Card, CardActions, CardContent, IconButton, Scrollable, Tab, Tabs, Badge } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { AgendaItemProps } from 'ui/atoms/agendaItem/AgendaItem.types';
import { DMSAgendaData } from 'api/mocks/dms';

import { useStyles } from './DmsDashboardBoardsAgenda.styles';

export const DmsDashboardBoardsAgenda = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const dateFormat = 'd LLLL';
  const agendaData = DMSAgendaData;

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
      <Tabs
        className={classes.tabs}
        onChange={(e, value) => setActiveTab(value)}
        value={activeTab}
        indicatorColor="primary"
        variant="fullWidth"
      >
        <Tab
          label={<div className={classes.agendaTab}>{formatMessage({ id: 'dms.dashboard.agenda.accepted' })}</div>}
        />
        <Tab
          label={
            <Badge badgeContent={3} color="secondary">
              <div className={classes.agendaTab}>{formatMessage({ id: 'dms.dashboard.agenda.rejected' })}</div>
            </Badge>
          }
        />
      </Tabs>
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
        <IconButton aria-label="add" color="primary" size="small" onClick={() => {}}>
          <AddIcon color="inherit" />
        </IconButton>
      </CardActions>
    </Card>
  );
};
