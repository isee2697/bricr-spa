import * as React from 'react';
import { WeekView as Week, WeekViewProps } from '@devexpress/dx-react-scheduler-material-ui';

import { useStyles } from './WeekView.styles';

const WeekTimeTableCell = ({ ...props }: Week.TimeTableCellProps) => {
  const classes = useStyles();

  return <Week.TimeTableCell {...props} className={classes.root} />;
};

export const WeekView = (props: WeekViewProps) => <Week {...props} timeTableCellComponent={WeekTimeTableCell} />;
