import React, { useRef, useState } from 'react';
import { Form } from 'react-final-form';
import { DateTime } from 'luxon';

import { AdvancedSearch, DatePicker, DatePickerCalendar } from 'ui/molecules';
import {
  Box,
  Button,
  CheckBox,
  Chip,
  Collapse,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  SidebarHideButton,
  Slide,
  Typography,
} from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { ArrowDownIcon, ArrowUpIcon, CalendarIcon } from 'ui/atoms/icons';
import { MembersDropdownField } from 'form/fields';
import { AppointmentType, TaskLabel } from 'api/types';

import { useStyles } from './SidebarMenu.styles';
import { SidebarMenuProps } from './SidebarMenu.types';

const taskTypes = Object.values(TaskLabel);

export const SidebarMenu = ({ isVisible, onHide, groups, teamMembers, filters, onFilterChange }: SidebarMenuProps) => {
  const [toggledSections, setToggled] = useState<{ [key: string]: boolean }>({ showGroups: true });
  const currentTeamMember = teamMembers.find(member => member.id === filters.selectedUser);
  const selectedGroup = groups.find(group => group.id === filters.selectedGroup);
  const ref = useRef<HTMLDivElement>(null);
  const classes = useStyles({
    width: ref?.current?.clientWidth ?? 'auto',
    bannerColor: selectedGroup?.color,
  });
  const { formatMessage } = useLocale();

  const onChangeDate = (date?: DateTime | null) => {
    date && onFilterChange(() => ({ ...filters, selectedDate: date }));
  };

  return (
    <Slide unmountOnExit mountOnEnter in={isVisible} direction="right">
      <Grid ref={ref} item xs={12} md={3} lg={2} className={classes.container}>
        <div className={classes.root}>
          <div className={classes.hideButton} onClick={onHide}>
            <SidebarHideButton />
          </div>
          <div className={classes.menuWrapper}>
            <div className={classes.banner}>
              <CalendarIcon />
              <Typography variant="h5">
                {!!currentTeamMember &&
                  !selectedGroup &&
                  `${currentTeamMember.firstName} ${currentTeamMember.lastName}`}
                {!currentTeamMember && !!selectedGroup && selectedGroup?.name}
                {!currentTeamMember && !selectedGroup && formatMessage({ id: 'calendar.my_calendar' })}
              </Typography>
            </div>
            {!selectedGroup && (
              <>
                <div className={classes.pickers}>
                  <DatePickerCalendar currentDate={filters.selectedDate} onChangeDate={onChangeDate} />
                </div>
                <Button
                  className={classes.showHideButton}
                  onClick={() =>
                    setToggled(current => ({ ...current, showSecondCalendar: !current.showSecondCalendar }))
                  }
                >
                  <Typography variant="h5">
                    {formatMessage({
                      id: `calendar.${toggledSections.showSecondCalendar ? 'hide' : 'show'}_second_calendar`,
                    })}
                  </Typography>
                  {toggledSections.showSecondCalendar ? <ArrowUpIcon /> : <ArrowDownIcon />}
                </Button>
                <div className={classes.pickers}>
                  <Collapse in={toggledSections.showSecondCalendar}>
                    <DatePickerCalendar
                      currentDate={filters.selectedDate.plus({ month: 1 })}
                      onChangeDate={onChangeDate}
                    />
                  </Collapse>
                </div>
                <div className={classes.groups}>
                  <Form onSubmit={() => Promise.resolve(undefined)}>
                    {() => (
                      <MembersDropdownField
                        onChange={id => id && onFilterChange(() => ({ ...filters, selectedUser: id as string }))}
                        label="calendar.search.members"
                        members={teamMembers}
                      />
                    )}
                  </Form>
                </div>
                <Button
                  className={classes.showHideButton}
                  onClick={() => setToggled(current => ({ ...current, myCalendar: !current.myCalendar }))}
                >
                  <Typography variant="h5">
                    {formatMessage({ id: `calendar.${toggledSections.myCalendar ? 'hide' : 'show'}_my_calendar` })}
                  </Typography>
                  {toggledSections.myCalendar ? <ArrowUpIcon /> : <ArrowDownIcon />}
                </Button>
                <div className={classes.groups}>
                  <Collapse in={toggledSections.myCalendar}>
                    <RadioGroup aria-label="myCalendars" name="myCalendars">
                      <FormControlLabel
                        control={
                          <Radio
                            onClick={() => {
                              const value = filters.showItemType !== 'Appointments' ? 'Appointments' : undefined;
                              onFilterChange(() => ({ ...filters, showItemType: value }));
                            }}
                            color="primary"
                            checked={filters.showItemType === 'Appointments'}
                          />
                        }
                        label={formatMessage({ id: 'calendar.appointments_label' })}
                      />
                      <FormControlLabel
                        control={
                          <Radio
                            onClick={() => {
                              const value = filters.showItemType !== 'Reminders' ? 'Reminders' : undefined;
                              onFilterChange(() => ({ ...filters, showItemType: value }));
                            }}
                            className={classes.greenBox}
                            checked={filters.showItemType === 'Reminders'}
                          />
                        }
                        label={formatMessage({ id: 'calendar.reminders_label' })}
                      />
                      <FormControlLabel
                        control={
                          <CheckBox
                            onClick={() => {
                              onFilterChange(() => ({ ...filters, showHolidays: !filters.showHolidays }));
                            }}
                            className={classes.orangeBox}
                            checked={!!filters.showHolidays}
                          />
                        }
                        label={formatMessage({ id: 'calendar.national_holidays_label' })}
                      />
                      <FormControlLabel
                        control={
                          <CheckBox
                            onClick={() => {
                              onFilterChange(() => ({ ...filters, showBirthDays: !filters.showBirthDays }));
                            }}
                            className={classes.FollowUp}
                            checked={!!filters.showBirthDays}
                          />
                        }
                        label={formatMessage({ id: 'calendar.birthdays_label' })}
                      />
                    </RadioGroup>
                  </Collapse>
                </div>

                <Button
                  className={classes.showHideButton}
                  onClick={() => setToggled(current => ({ ...current, tasks: !current.tasks }))}
                >
                  <Typography variant="h5">
                    {formatMessage({ id: `calendar.${toggledSections.tasks ? 'hide' : 'show'}_tasks` })}
                  </Typography>
                  {toggledSections.myCalendar ? <ArrowUpIcon /> : <ArrowDownIcon />}
                </Button>
                <div className={classes.groups}>
                  <Collapse in={toggledSections.tasks}>
                    <RadioGroup aria-label="task" name="tasks">
                      <FormControlLabel
                        control={
                          <CheckBox
                            onClick={() => {
                              const value = filters.selectTaskType.length === taskTypes.length ? [] : taskTypes;
                              onFilterChange(() => ({ ...filters, selectTaskType: value }));
                            }}
                            checked={filters.selectTaskType.length === taskTypes.length}
                            className={classes.blueBox}
                          />
                        }
                        label={formatMessage({ id: 'calendar.task_label.check_all' })}
                      />
                      {taskTypes.map(value => (
                        <FormControlLabel
                          control={
                            <CheckBox
                              onClick={() => {
                                const newVal = filters.selectTaskType.includes(value)
                                  ? filters.selectTaskType.filter(val => val !== value)
                                  : [...filters.selectTaskType, value];
                                onFilterChange(() => ({ ...filters, selectTaskType: newVal }));
                              }}
                              className={classes[value]}
                              checked={filters.selectTaskType.includes(value)}
                            />
                          }
                          label={formatMessage({ id: `calendar.task_label.${value.toLowerCase()}` })}
                        />
                      ))}
                    </RadioGroup>
                  </Collapse>
                </div>
              </>
            )}
            <Button
              className={classes.showHideButton}
              onClick={() => setToggled(current => ({ ...current, showGroups: !current.showGroups }))}
            >
              <Typography variant="h5">
                {formatMessage({ id: `calendar.${toggledSections.showGroups ? 'hide' : 'show'}_groups` })}
              </Typography>
              {toggledSections.showGroups ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </Button>
            <div className={classes.groups}>
              <Collapse in={toggledSections.showGroups}>
                <RadioGroup aria-label="group" name="group">
                  {groups.map(group => (
                    <FormControlLabel
                      control={
                        <Radio
                          onClick={() => {
                            const value = selectedGroup?.id === group.id ? undefined : group.id;
                            onFilterChange(() => ({ ...filters, selectedGroup: value }));
                          }}
                          color="primary"
                          checked={filters.selectedGroup === group.id}
                        />
                      }
                      label={
                        <>
                          {group?.name}
                          <Chip size="medium" className={classes.count} label={group.members?.length ?? '-'} />
                        </>
                      }
                      disabled={!group.members || group.members.length === 0}
                    />
                  ))}
                </RadioGroup>
              </Collapse>
            </div>
            <div className={classes.groups}>
              <DatePicker label="calendar.search.date" value={filters.selectedDate} onChange={onChangeDate} />

              <Box mt={2} />
              <Typography variant="h5">{formatMessage({ id: 'calendar.appointment_type.search' })}</Typography>
              <AdvancedSearch
                items={Object.keys(AppointmentType).map(item => ({
                  label: formatMessage({ id: `dictionaries.appointment.type.${item}` }),
                  value: item,
                }))}
                placeholder={formatMessage({ id: 'appointment.type.placeholder' })}
                align="left"
                onChange={type =>
                  type && onFilterChange(() => ({ ...filters, selectedAppointmentType: type as AppointmentType }))
                }
                classes={classes}
                value={filters.selectedAppointmentType}
              />
            </div>
            <Box mb={5} />
          </div>
        </div>
      </Grid>
    </Slide>
  );
};
