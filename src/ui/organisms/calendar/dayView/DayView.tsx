import * as React from 'react';
import { DayView as Day, DayViewProps } from '@devexpress/dx-react-scheduler-material-ui';

import { useStyles } from 'ui/organisms/calendar/dayView/DayView.styles';

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

export const DayView = ({ disableHead, ...props }: DayViewProps & { disableHead?: boolean }) => (
  <Day
    {...props}
    dayScaleLayoutComponent={disableHead ? () => <></> : DayScale}
    layoutComponent={DayLayout}
    timeScaleLabelComponent={DayScaleLabel}
    timeTableCellComponent={DayTimeTableCell}
  />
);
