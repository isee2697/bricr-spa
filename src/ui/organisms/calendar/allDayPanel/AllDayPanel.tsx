import React from 'react';
import { AllDayPanel as AllDay, AllDayPanelProps } from '@devexpress/dx-react-scheduler-material-ui';

import { useStyles } from './AllDayPanel.styles';

const Cell = (props: AllDay.CellProps) => {
  const classes = useStyles();

  return <AllDay.Cell {...props} className={classes.root} />;
};

export const AllDayPanel = (props: AllDayPanelProps) => {
  return <AllDay {...props} cellComponent={Cell} />;
};
