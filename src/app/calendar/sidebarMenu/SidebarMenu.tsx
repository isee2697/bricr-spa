import React, { useRef, useState } from 'react';

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
} from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { ArrowDownIcon, ArrowUpIcon, CalendarIcon } from 'ui/atoms/icons';
import { DatePickerCalendar } from 'ui/molecules';
import { CalendarGroup } from 'api/types';

import { useStyles } from './SidebarMenu.styles';
import { SidebarMenuProps } from './SidebarMenu.types';

export const SidebarMenu = ({
  isVisible,
  onHide,
  currentDate,
  onChangeDate,
  groups,
  teamMembers,
  selectedGroup,
  onGroupSelect,
}: SidebarMenuProps) => {
  const [showSecond, setShowSecond] = useState(false);
  const [showGroups, setShowGroups] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const classes = useStyles({
    width: ref?.current?.clientWidth ?? 'auto',
    bannerColor: selectedGroup?.color,
  });
  const { formatMessage } = useLocale();

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
                {selectedGroup?.name ?? formatMessage({ id: 'calendar.my_calendar' })}
              </Typography>
            </div>
            {!selectedGroup && (
              <>
                <div className={classes.pickers}>
                  <DatePickerCalendar currentDate={currentDate} onChangeDate={onChangeDate} />
                </div>
                <Button className={classes.showHideButton} onClick={() => setShowSecond(current => !current)}>
                  <Typography variant="h5">
                    {formatMessage({ id: `calendar.${showSecond ? 'hide' : 'show'}_second_calendar` })}
                  </Typography>
                  {showSecond ? <ArrowDownIcon /> : <ArrowUpIcon />}
                </Button>
                <div className={classes.pickers}>
                  <Collapse in={showSecond}>
                    <DatePickerCalendar currentDate={currentDate.plus({ month: 1 })} onChangeDate={onChangeDate} />
                  </Collapse>
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
                          onClick={() => onGroupSelect(group)}
                          color="primary"
                          checked={selectedGroup?.id === group.id}
                        />
                      }
                      label={
                        <>
                          {group?.name}{' '}
                          <Chip size="medium" className={classes.count} label={group.members?.length ?? '-'} />
                        </>
                      }
                      disabled={!group.members || group.members.length === 0}
                    />
                  ))}
                </RadioGroup>
              </Collapse>
            </div>
          </div>
        </div>
      </Grid>
    </Slide>
  );
};
