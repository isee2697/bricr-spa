import React from 'react';
import { useTheme } from '@material-ui/core';

import { DateView } from 'ui/molecules/calendar/Calandar.types';
import { Calendar as CalendarMolecule } from 'ui/molecules';
import { Scrollable } from 'ui/atoms';
import { CalendarGroupViewProps } from 'app/calendar/view/CalendarView.types';

import { useStyles } from './GroupDayView.styles';

export const GroupDayView = ({ currentDate, data, group }: CalendarGroupViewProps) => {
  const classes = useStyles();
  const { spacing, breakpoints } = useTheme();

  const height = spacing(breakpoints.up('xl') ? 70 : 60);

  return (
    <Scrollable width={'100%'} height={height}>
      <div className={classes.content}>
        {group.members?.map(member => (
          <div className="item">
            <div className={classes.header}>{`${member.firstName} ${member.lastName}`}</div>
            <div className={classes.borderRight}>
              <CalendarMolecule
                height={height - spacing(6)}
                view={DateView.Group}
                currentDate={currentDate}
                data={data}
              />
            </div>
          </div>
        ))}
      </div>
    </Scrollable>
  );
};
