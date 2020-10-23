import React from 'react';
import { DateTime } from 'luxon';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core';

import { DateView } from 'ui/molecules/calendar/Calandar.types';
import { Calendar as CalendarMolecule } from 'ui/molecules';
import { Scrollable } from 'ui/atoms';
import { CalendarGroupViewProps } from 'app/calendar/view/CalendarView.types';

export const useStyles = makeStyles(({ spacing, palette, typography }) => ({
  content: {
    display: 'flex',
    '& > *': {
      flex: '1 0 auto',
      width: spacing(25),
    },
    '& .item:first-child [class*="makeStyles-header"]': {
      borderTopLeftRadius: spacing(0.5),
    },
    '& .item:last-child [class*="makeStyles-header"]': {
      borderTopRightRadius: spacing(0.5),
      borderRight: 'none',
    },
  },
  header: {
    height: spacing(4),
    backgroundColor: palette.gray.light,
    color: palette.text.primary,
    fontSize: typography.h6.fontSize,
    fontWeight: typography.fontWeightBold,
    textAlign: 'center',
    borderRight: `${spacing(0.25)}px solid ${palette.white.main}`,
    paddingTop: spacing(1.25),
  },
  borderRight: {
    borderRight: `${spacing(0.25)}px solid ${palette.gray.light}`,
    '& [class*="AllDayContainer-container"]': {
      marginTop: spacing(-3),
    },
  },
}));

export const GroupDayView = ({ currentDate, data, group }: CalendarGroupViewProps) => {
  const users = [1, 2, 3, 4, 5];

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
