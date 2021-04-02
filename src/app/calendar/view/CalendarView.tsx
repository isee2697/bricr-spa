import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { useHistory } from 'react-router-dom';
import { AppointmentModel } from '@devexpress/dx-react-scheduler';

import { Page } from 'ui/templates';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Tab,
  Tabs,
  Typography,
  IconButton,
  Loader,
  Chip,
  Radio,
  FormControlLabel,
  Collapse,
} from 'ui/atoms';
import { Calendar as CalendarMolecule } from 'ui/molecules';
import {
  AddIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  TodayIcon,
  SettingsIcon,
  ManageIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { DateView } from 'ui/molecules/calendar/Calandar.types';
import { AppRoute } from 'routing/AppRoute.enum';
import { SidebarMenu } from '../sidebarMenu/SidebarMenu';
import { useLayout } from 'context/layout';
import { AppointmentSearch, CalendarTypes, useListCalendarQuery } from 'api/types';

import { GroupDayView } from './group/GroupDayView';
import { CalendarViewProps } from './CalendarView.types';
import { useStyles } from './CalendarView.styles';
import { getViewRange } from './CalendarView.controller';
import { TodayViewCards } from './todayViewCards/TodayViewCards';
import { TodaySidePanel } from './todaySidePanel/TodaySidePanel';

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

export const CalendarView = ({ account, teamMembers, groups, filters, onFilterChange }: CalendarViewProps) => {
  const [currentView, setView] = useState(DateView.Day);
  const dateValues = Object.values(DateView);
  const { isSidebarMenuVisible, setSidebarMenuVisible } = useLayout();
  const classes = useStyles();
  const { selectedDate, selectedGroup } = filters;
  const { formatMessage } = useLocale();
  const [calendarType, setCalendarType] = useState<CalendarTypes>();
  const [showCards, setShowCards] = useState(false);

  const { push } = useHistory();

  const { startDate, endDate } = getViewRange(currentView, selectedDate.toJSDate());
  const searchParams: AppointmentSearch = {
    accountId: account?.id || '',
    startDate: startDate.toLocaleDateString(),
    endDate: endDate.toLocaleDateString(),
  };
  const { data: calendarData } = useListCalendarQuery({
    fetchPolicy: 'no-cache',
    skip: !searchParams || !account,
    variables: {
      input: searchParams,
    },
  });

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

  const handleChangeCalendarType = (type: CalendarTypes) => {
    if (!calendarType || calendarType !== type) {
      setCalendarType(type);
    } else {
      setCalendarType(undefined);
    }
  };

  const handleToggleCardsList = (type: CalendarTypes) => {
    if (showCards && calendarType === type) {
      setShowCards(false);
    } else {
      setShowCards(true);
      setCalendarType(type);
    }
  };

  const appointments = calendarType ? data.filter(item => item.type === calendarType) : data;

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
              {!selectedGroup && (
                <>
                  <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Tabs indicatorColor="primary" value={dateValues.findIndex(view => view === currentView)}>
                      {dateValues.map(
                        dateView =>
                          dateView !== DateView.Group && (
                            <Tab key={dateView} onClick={() => setView(dateView)} label={getTabLabelId(dateView)} />
                          ),
                      )}
                    </Tabs>
                    <Box display="flex" alignItems="center">
                      <IconButton variant="rounded" size="small" onClick={() => goBackToToday()}>
                        <TodayIcon color="primary" />
                      </IconButton>
                      <Box ml={2} />
                      <IconButton variant="rounded" size="small" onClick={() => {}}>
                        <ManageIcon />
                      </IconButton>
                    </Box>
                  </Box>
                  <Box mt={2} />

                  <Box display="flex" alignItems="flex-start" justifyContent="space-between" ml={12}>
                    <Box display="flex" alignItems="center" mt={6}>
                      <Typography variant="h4">{formatMessage({ id: 'calendar.appointment.appointments' })}</Typography>
                      <Chip size="small" label={appointments.length} className={classes.appointmentCountChip} />
                    </Box>
                    <Box>
                      <Box display="flex" alignItems="center" justifyContent="space-between">
                        <FormControlLabel
                          control={
                            <Radio
                              checked={calendarType === CalendarTypes.Task}
                              onClick={() => handleChangeCalendarType(CalendarTypes.Task)}
                              color="primary"
                            />
                          }
                          label={formatMessage({ id: 'calendar.appointment.appointment_type.task' })}
                        />
                        <Box display="flex" alignItems="center">
                          <Chip
                            size="small"
                            label={data.filter(item => item.type === CalendarTypes.Task).length}
                            className={classes.smallChip}
                          />
                          {currentView === DateView.Day && (
                            <Box
                              onClick={() => handleToggleCardsList(CalendarTypes.Task)}
                              className={classes.collapseBtn}
                            >
                              {showCards && calendarType === CalendarTypes.Task ? <ArrowUpIcon /> : <ArrowDownIcon />}
                            </Box>
                          )}
                        </Box>
                      </Box>
                      <Box display="flex" alignItems="center" justifyContent="space-between">
                        <FormControlLabel
                          control={
                            <Radio
                              checked={calendarType === CalendarTypes.Appointment}
                              onClick={() => handleChangeCalendarType(CalendarTypes.Appointment)}
                              color="primary"
                            />
                          }
                          label={formatMessage({ id: 'calendar.appointment.appointment_type.appointment' })}
                        />
                        <Box display="flex" alignItems="center">
                          <Chip
                            size="small"
                            label={data.filter(item => item.type === CalendarTypes.Appointment).length}
                            className={classes.smallChip}
                          />
                          {currentView === DateView.Day && (
                            <Box
                              onClick={() => handleToggleCardsList(CalendarTypes.Appointment)}
                              className={classes.collapseBtn}
                            >
                              {showCards && calendarType === CalendarTypes.Appointment ? (
                                <ArrowUpIcon />
                              ) : (
                                <ArrowDownIcon />
                              )}
                            </Box>
                          )}
                        </Box>
                      </Box>

                      <Collapse in={currentView === DateView.Day && showCards}>
                        {calendarType && <TodayViewCards type={calendarType} appointments={appointments} />}
                      </Collapse>
                    </Box>
                  </Box>

                  <Box display="flex" alignItems="flex-start">
                    <CalendarMolecule
                      account={account}
                      view={currentView}
                      currentDate={selectedDate.toJSDate()}
                      data={data}
                    />
                    {currentView === DateView.Day && <TodaySidePanel date={selectedDate} appointments={appointments} />}
                  </Box>
                </>
              )}
              {!!selectedGroup && (
                <GroupDayView
                  data={appointments}
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
