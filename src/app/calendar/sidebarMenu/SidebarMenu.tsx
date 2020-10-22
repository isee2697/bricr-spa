import React, { useRef, useState } from 'react';

import { Slide, Grid, SidebarHideButton, Typography, Collapse, Button } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { ArrowDownIcon, ArrowUpIcon, CalendarIcon } from 'ui/atoms/icons';
import { DatePickerCalendar } from 'ui/molecules';

import { useStyles } from './SidebarMenu.styles';
import { SidebarMenuProps } from './SidebarMenu.types';

export const SidebarMenu = ({ isVisible, onHide, currentDate, onChangeDate }: SidebarMenuProps) => {
  const [showSecond, setSHowSecond] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const classes = useStyles(ref?.current?.clientWidth ?? 'auto');
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
              <Typography variant="h5">{formatMessage({ id: 'calendar.my_calendar' })}</Typography>
            </div>
            <div className={classes.pickers}>
              <DatePickerCalendar currentDate={currentDate} onChangeDate={onChangeDate} />
              <Button onClick={() => setSHowSecond(current => !current)}>
                {showSecond ? <ArrowDownIcon /> : <ArrowUpIcon />}
                <Typography variant="h5">
                  {formatMessage({ id: `calendar.${showSecond ? 'hide' : 'show'}_second_calendar` })}
                </Typography>
              </Button>
              <Collapse in={showSecond}>
                <DatePickerCalendar currentDate={currentDate.plus({ month: 1 })} onChangeDate={onChangeDate} />
              </Collapse>
            </div>
          </div>
        </div>
      </Grid>
    </Slide>
  );
};
