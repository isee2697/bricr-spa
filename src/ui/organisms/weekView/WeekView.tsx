import * as React from 'react';
import { WeekView as Week, WeekViewProps } from '@devexpress/dx-react-scheduler-material-ui';

import { useStyles } from './WeekView.styles';

const WeekTimeTableCell = ({ ...props }: Week.TimeTableCellProps) => {
  const classes = useStyles();

  return <Week.TimeTableCell {...props} className={classes.root} />;
};

const WeekTimeScaleLabel = ({ ...props }: Week.TimeScaleLabelProps) => {
  const classes = useStyles();

  return <Week.TimeScaleLabel {...props} className={classes.root} />;
};

const WeekTimeScaleLayoutProps = ({ ...props }: Week.TimeScaleLayoutProps) => {
  const classes = useStyles();

  return <Week.TimeScaleLayout {...props} className={classes.root} />;
};

export const WeekView = (props: WeekViewProps) => (
  <Week
    {...props}
    // timeScaleLayoutComponent={WeekTimeScaleLayoutProps}
    timeScaleLabelComponent={WeekTimeScaleLabel}
    timeTableCellComponent={WeekTimeTableCell}
  />
);
