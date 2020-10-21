import { MonthView as Month, MonthViewProps } from '@devexpress/dx-react-scheduler-material-ui';
import React from 'react';

import { useStyles } from './MonthView.styles';
// const timeCell = withStyles({ root: {} })(Month.TimeTableCell);

const DayLayout = (props: Month.DayScaleLayoutProps) => {
  const classes = useStyles();

  return <Month.DayScaleLayout {...props} className={classes.root} />;
};
const Cell = (props: Month.TimeTableCellProps) => {
  // console.log(props);
  // console.log(props.children);
  const classes = useStyles();

  return <Month.TimeTableCell {...props} className={classes.appointmentRoot} />;
};

export const MonthView = (props: MonthViewProps) => {
  // console.log(props);

  return <Month {...props} timeTableCellComponent={Cell} dayScaleLayoutComponent={DayLayout} />;
};
