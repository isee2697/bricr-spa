import * as React from 'react';
import { DayView as Day, DayViewProps } from '@devexpress/dx-react-scheduler-material-ui';

import { useStyles } from './DayView.styles';

const DayTimeTableCell = ({ ...props }: Day.TimeTableCellProps) => {
  const classes = useStyles();

  return <Day.TimeTableCell {...props} className={classes.root} />;
};

export const DayView = (props: DayViewProps) => <Day {...props} timeTableCellComponent={DayTimeTableCell} />;
