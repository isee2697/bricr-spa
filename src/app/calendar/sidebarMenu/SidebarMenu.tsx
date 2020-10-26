import React, { useRef, useState } from 'react';
import { Form } from 'react-final-form';
import { DateTime } from 'luxon';

import { AdvancedSearch } from 'ui/molecules';
import {
  Slide,
  Grid,
  SidebarHideButton,
  Typography,
  Collapse,
  Button,
  RadioGroup,
  Radio,
  FormControlLabel,
  Chip,
  Box,
} from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { ArrowDownIcon, ArrowUpIcon, CalendarIcon } from 'ui/atoms/icons';
import { DatePicker, DatePickerCalendar } from 'ui/molecules';
import { MembersDropdownField } from 'form/fields';
import { AppointmentType } from 'api/types';

import { useStyles } from './SidebarMenu.styles';
import { SidebarMenuProps } from './SidebarMenu.types';

export const SidebarMenu = ({ isVisible, onHide, groups, teamMembers, filters, onFilterChange }: SidebarMenuProps) => {
  const [showSecond, setShowSecond] = useState(false);
  const [showGroups, setShowGroups] = useState(true);
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
                <Button className={classes.showHideButton} onClick={() => setShowSecond(current => !current)}>
                  <Typography variant="h5">
                    {formatMessage({ id: `calendar.${showSecond ? 'hide' : 'show'}_second_calendar` })}
                  </Typography>
                  {showSecond ? <ArrowDownIcon /> : <ArrowUpIcon />}
                </Button>
                <div className={classes.pickers}>
                  <Collapse in={showSecond}>
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
              </>
            )}
            <Button className={classes.showHideButton} onClick={() => setShowGroups(current => !current)}>
              <Typography variant="h5">
                {formatMessage({ id: `calendar.${showGroups ? 'hide' : 'show'}_groups` })}
              </Typography>
              {showGroups ? <ArrowDownIcon /> : <ArrowUpIcon />}
            </Button>
            <div className={classes.groups}>
              <Collapse in={showGroups}>
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
          </div>
        </div>
      </Grid>
    </Slide>
  );
};
