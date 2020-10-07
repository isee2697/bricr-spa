import * as React from 'react';
import { DayView as Day, DayViewProps, WeekView as Week } from '@devexpress/dx-react-scheduler-material-ui';

import { useStyles } from './DayView.styles';

const DayTimeTableCell = ({ ...props }: Day.TimeTableCellProps) => {
  const classes = useStyles();

  return <Day.TimeTableCell {...props} className={classes.root} />;
};

const DayScale = ({ ...props }: Day.DayScaleLayoutProps) => {
  const classes = useStyles();

  return <Day.DayScaleLayout {...props} className={classes.day} />;
};

const DayScaleLabel = ({ ...props }: Day.TimeScaleLabelProps) => {
  const classes = useStyles();

  return <Day.TimeScaleLabel {...props} className={classes.root} />;
};

const DayLayout = ({ ...props }: Day.LayoutProps) => {
  const classes = useStyles();

  return <Day.Layout {...props} className={classes.day} />;
};

export const DayView = (props: DayViewProps) => (
  <Day
    {...props}
    layoutComponent={DayLayout}
    dayScaleLayoutComponent={DayScale}
    timeScaleLabelComponent={DayScaleLabel}
    timeTableCellComponent={DayTimeTableCell}
  />
);
