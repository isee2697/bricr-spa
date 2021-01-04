import React from 'react';
import { useTheme } from '@material-ui/core';

import { DateView } from 'ui/molecules/calendar/Calandar.types';
import { Calendar as CalendarMolecule } from 'ui/molecules';
import { Scrollable } from 'ui/atoms';
import { CalendarGroupViewProps } from 'app/calendar/view/CalendarView.types';

import { useStyles } from './GroupDayView.styles';

export const GroupDayView = ({ account, currentDate, data, group }: CalendarGroupViewProps) => {
  const classes = useStyles();
  const { spacing, breakpoints } = useTheme();

  const height = spacing(breakpoints.up('xl') ? 70 : 60);

  return (
    <div className={classes.root}>
      <Scrollable width={'100%'} height={height}>
        <div className="content">
          {group?.members?.map(member => (
            <div className="item">
              <div className="header">{`${member.firstName} ${member.lastName}`}</div>
              <div className="borderRight">
                <CalendarMolecule
                  height={height - spacing(6)}
                  view={DateView.Group}
                  currentDate={currentDate}
                  data={data}
                  account={account}
                />
              </div>
            </div>
          ))}
        </div>
      </Scrollable>
    </div>
  );
};
