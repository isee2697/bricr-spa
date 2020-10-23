import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { useHistory } from 'react-router-dom';

import { Page } from 'ui/templates';
import { Box, Button, Card, Grid, Tab, Tabs, Typography } from 'ui/atoms';
import { Calendar as CalendarMolecule } from 'ui/molecules';
import { AddIcon, ArrowLeftIcon, ArrowRightIcon, SettingsIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { DateView } from 'ui/molecules/calendar/Calandar.types';
import { AppRoute } from 'routing/AppRoute.enum';
import { SidebarMenu } from '../sidebarMenu/SidebarMenu';
import { useLayout } from 'context/layout';
import { CalendarGroup } from 'api/types';
import { GroupDayView } from 'app/calendar/view/group/GroupDayView';

import { CalendarViewProps } from './CalendarView.types';
import { useStyles } from './CalendarView.styles';

const getViewTitle = (view: DateView, currentDate: DateTime, formatMessage: (data: { id: string }) => string) => {
  switch (view) {
    default:
    case DateView.Week:
      return (
        <>
          <Typography variant="h1">
            {`${currentDate.startOf('week').day} - ${currentDate.endOf('week').day} ${currentDate.monthLong}`}
          </Typography>
          <Typography variant="h2">{`(${currentDate.weekNumber} ${formatMessage({ id: 'common.week' })})`}</Typography>
        </>
      );
    case DateView.Day:
    case DateView.Group:
      return <Typography variant="h1">{currentDate.toFormat('DDDD')}</Typography>;
    case DateView.Month:
      return <Typography variant="h1">{currentDate.toFormat('LLLL yyyy')}</Typography>;
  }
};

export const CalendarView = ({ data, teamMembers, groups }: CalendarViewProps) => {
  const [selectedGroup, setSelectedGroup] = useState<CalendarGroup | undefined>();
  const [currentView, setView] = useState(DateView.Week);
  const dateValues = Object.values(DateView);
  const { isSidebarMenuVisible, setSidebarMenuVisible } = useLayout();
  const classes = useStyles();
  const [showDate, setShowDate] = useState(DateTime.local());
  const { formatMessage } = useLocale();

  const { push } = useHistory();

  const switchStartDate = (status: 'next' | 'prev') => {
    const duration = currentView !== DateView.Group ? currentView : DateView.Day;
    setShowDate(showDate.plus({ [duration]: status === 'next' ? 1 : -1 }));
  };

  return (
    <Grid container>
      <SidebarMenu
        selectedGroup={selectedGroup}
        onGroupSelect={group => {
          const isSelected = group.id === selectedGroup?.id;
          setView(isSelected ? DateView.Week : DateView.Group);
          setSelectedGroup(!isSelected ? group : undefined);
        }}
        currentDate={showDate}
        onChangeDate={newDate => newDate && setShowDate(newDate)}
        isVisible={isSidebarMenuVisible}
        onHide={() => setSidebarMenuVisible(!isSidebarMenuVisible)}
        groups={groups}
        teamMembers={teamMembers}
      />
      <Grid
        item
        xs={isSidebarMenuVisible ? false : 12}
        md={isSidebarMenuVisible ? 9 : 12}
        lg={isSidebarMenuVisible ? 10 : 12}
        className={classes.content}
      >
        <Page
          showHeader
          afterTitle={
            <div className={classes.title}>
              <Box display="flex" mr={2}>
                {getViewTitle(currentView, showDate, formatMessage)}
              </Box>
              <Button variant="contained" onClick={() => switchStartDate('prev')}>
                <ArrowLeftIcon />
              </Button>
              <Button variant="contained" onClick={() => switchStartDate('next')}>
                <ArrowRightIcon />
              </Button>
            </div>
          }
          headerProps={{
            customAction: (
              <>
                <Box mt={1} ml="auto" mr={5}>
                  <SettingsIcon />
                </Box>
                <Button onClick={() => push(AppRoute.newAppointment)} variant="contained" color="primary">
                  <AddIcon color="inherit" /> {formatMessage({ id: 'calendar.appointment.add' })}
                </Button>
              </>
            ),
          }}
          titleActions={<></>}
        >
          <Card className={classes.content}>
            {currentView !== DateView.Group && (
              <>
                <Tabs indicatorColor="primary" value={dateValues.findIndex(view => view === currentView)}>
                  {dateValues.map(
                    dateView =>
                      dateView !== DateView.Group && (
                        <Tab
                          key={dateView}
                          onClick={() => setView(dateView)}
                          label={formatMessage({ id: `common.${dateView.toLowerCase()}` })}
                        />
                      ),
                  )}
                </Tabs>
                <Box mt={2} />

                <CalendarMolecule view={currentView} currentDate={showDate.toJSDate()} data={data} />
              </>
            )}
            {!!selectedGroup && currentView === DateView.Group && (
              <GroupDayView data={data} group={selectedGroup} currentDate={showDate.toJSDate()} />
            )}
          </Card>
        </Page>
      </Grid>
    </Grid>
  );
};
