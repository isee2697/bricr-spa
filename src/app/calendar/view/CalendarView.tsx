import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { useHistory } from 'react-router-dom';
import { AppointmentModel } from '@devexpress/dx-react-scheduler';

import { Page } from 'ui/templates';
import { Box, Button, Card, CardHeader, CardContent, Grid, Tab, Tabs, Typography, IconButton, Loader } from 'ui/atoms';
import { Calendar as CalendarMolecule } from 'ui/molecules';
import { AddIcon, ArrowLeftIcon, ArrowRightIcon, TodayIcon, SettingsIcon, ManageIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { DateView } from 'ui/molecules/calendar/Calandar.types';
import { AppRoute } from 'routing/AppRoute.enum';
import { SidebarMenu } from '../sidebarMenu/SidebarMenu';
import { useLayout } from 'context/layout';
import { AppointmentSearch, useListCalendarLazyQuery } from 'api/types';

import { GroupDayView } from './group/GroupDayView';
import { CalendarViewProps } from './CalendarView.types';
import { useStyles } from './CalendarView.styles';
import { getViewRange } from './CalendarView.controller';

const getViewTitle = (
  view: DateView | boolean,
  currentDate: DateTime,
  formatMessage: (data: { id: string }) => string,
) => {
  switch (view) {
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
    default:
      return <Typography variant="h1">{currentDate.toFormat('DDDD')}</Typography>;
    case DateView.Month:
      return <Typography variant="h1">{currentDate.toFormat('LLLL yyyy')}</Typography>;
  }
};

export const CalendarView = ({
  account,
  // data,
  teamMembers,
  groups,
  filters,
  onFilterChange,
}: CalendarViewProps) => {
  const [currentView, setView] = useState(DateView.Week);
  const dateValues = Object.values(DateView);
  const { isSidebarMenuVisible, setSidebarMenuVisible } = useLayout();
  const classes = useStyles();
  const { selectedDate, selectedGroup } = filters;
  const { formatMessage } = useLocale();

  const { push } = useHistory();

  const [getListCalendarQuery, { data: calendarData }] = useListCalendarLazyQuery({
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    const { startDate, endDate } = getViewRange(currentView, selectedDate.toJSDate());
    const searchParams: AppointmentSearch = {
      accountId: account?.id || '',
      startDate: startDate.toLocaleDateString(),
      endDate: endDate.toLocaleDateString(),
    };

    getListCalendarQuery({
      variables: {
        input: searchParams,
      },
    });
  }, [account, currentView, filters.selectedDate, getListCalendarQuery, selectedDate]);

  let data: AppointmentModel[] = [];

  if (filters.selectTaskType.length > 0) {
    data =
      calendarData?.listCalendar
        ?.filter(appointment => appointment.taskLabel && filters.selectTaskType.includes(appointment.taskLabel))
        .map(appointment => ({
          ...appointment,
          title: appointment.title || '',
          allDay: appointment.allDay || false,
          startDate: appointment.from,
          endDate: appointment.to,
        })) || [];
  }

  if (!data) {
    return <Loader />;
  }

  const switchStartDate = (status: 'next' | 'prev') => {
    const duration = !selectedGroup ? currentView : DateView.Day;
    onFilterChange(current => ({
      ...current,
      selectedDate: selectedDate.plus({ [duration]: status === 'next' ? 1 : -1 }),
    }));
  };

  const goBackToToday = () => {
    onFilterChange(current => ({
      ...current,
      selectedDate: DateTime.local(),
    }));
  };

  const getTabLabelId = (dateView: DateView) => {
    if (dateView === DateView.Day && Math.round(selectedDate.diff(DateTime.local(), 'days').days) === 0) {
      return formatMessage({ id: `common.today` });
    }

    return formatMessage({ id: `common.${dateView.toLowerCase()}` });
  };

  return (
    <Grid container>
      <SidebarMenu
        isVisible={isSidebarMenuVisible}
        onHide={() => setSidebarMenuVisible(!isSidebarMenuVisible)}
        groups={groups}
        teamMembers={teamMembers}
        filters={filters}
        onFilterChange={onFilterChange}
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
                {getViewTitle(!selectedGroup && currentView, selectedDate, formatMessage)}
              </Box>
              <IconButton
                size="small"
                variant="roundedContained"
                onClick={() => switchStartDate('prev')}
                className={classes.btnNav}
              >
                <ArrowLeftIcon />
              </IconButton>
              <Box ml={1} />
              <IconButton
                size="small"
                variant="roundedContained"
                onClick={() => switchStartDate('next')}
                className={classes.btnNav}
              >
                <ArrowRightIcon />
              </IconButton>
            </div>
          }
          headerProps={{
            customAction: (
              <>
                <Box mt={1} ml="auto" mr={5}>
                  <IconButton variant="rounded" size="small" onClick={() => push(`${AppRoute.calendar}/settings`)}>
                    <SettingsIcon />
                  </IconButton>
                </Box>
                <Button
                  onClick={() => push(AppRoute.newAppointment.replace(':accountId', account?.id || ''))}
                  variant="contained"
                  color="primary"
                >
                  <AddIcon color="inherit" /> {formatMessage({ id: 'calendar.appointment.add' })}
                </Button>
              </>
            ),
          }}
          titleActions={<></>}
        >
          <Card>
            <CardContent>
              <CardHeader
                className={classes.header}
                action={
                  <Box display="flex" alignItems="center">
                    <IconButton variant="rounded" size="small" onClick={() => goBackToToday()}>
                      <TodayIcon color="primary" />
                    </IconButton>
                    <Box ml={2} />
                    <IconButton variant="rounded" size="small" onClick={() => {}}>
                      <ManageIcon />
                    </IconButton>
                  </Box>
                }
              />
              {!selectedGroup && (
                <>
                  <Tabs indicatorColor="primary" value={dateValues.findIndex(view => view === currentView)}>
                    {dateValues.map(
                      dateView =>
                        dateView !== DateView.Group && (
                          <Tab key={dateView} onClick={() => setView(dateView)} label={getTabLabelId(dateView)} />
                        ),
                    )}
                  </Tabs>
                  <Box mt={2} />

                  <CalendarMolecule view={currentView} currentDate={selectedDate.toJSDate()} data={data} />
                </>
              )}
              {!!selectedGroup && (
                <GroupDayView
                  data={data}
                  group={groups.find(group => group.id === selectedGroup)}
                  currentDate={selectedDate.toJSDate()}
                  account={account}
                />
              )}
            </CardContent>
          </Card>
        </Page>
      </Grid>
    </Grid>
  );
};
