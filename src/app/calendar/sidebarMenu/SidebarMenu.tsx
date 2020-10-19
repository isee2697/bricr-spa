import React, { useState } from 'react';
import { DatePicker } from '@material-ui/pickers';

import { Slide, Grid, SidebarHideButton, Typography, Collapse, Button } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { ArrowDownIcon, ArrowUpIcon, CalendarIcon } from 'ui/atoms/icons';

import { useStyles } from './SidebarMenu.styles';
import { SidebarMenuProps } from './SidebarMenu.types';

export const SidebarMenu = ({ isVisible, onHide, currentDate, onChangeDate }: SidebarMenuProps) => {
  const [showSecond, setSHowSecond] = useState(false);
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Slide unmountOnExit mountOnEnter in={isVisible} direction="right">
      <Grid item xs={12} md={3} lg={2}>
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
              <DatePicker
                autoOk
                orientation="portrait"
                variant="static"
                openTo="date"
                value={currentDate}
                disableToolbar
                onChange={onChangeDate}
              />
              <Button onClick={() => setSHowSecond(current => !current)}>
                {showSecond ? <ArrowDownIcon /> : <ArrowUpIcon />}
                <Typography>
                  {formatMessage({ id: `calendar.${showSecond ? 'hide' : 'show'}_second_calendar` })}
                </Typography>
              </Button>
              <Collapse in={showSecond}>
                <DatePicker
                  autoOk
                  orientation="portrait"
                  variant="static"
                  openTo="date"
                  value={currentDate}
                  disableToolbar
                  onChange={onChangeDate}
                />
              </Collapse>
            </div>
          </div>
        </div>
      </Grid>
    </Slide>
  );
};
