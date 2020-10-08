import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react';

import { Stepper, Step, StepLabel, StepContent, StepConnector } from 'ui/atoms';

import { useStyles } from './VerticalTimeline.styles';
import { VerticalTimelineProps } from './VerticalTimeline.types';

const VerticalTimlineStepConnector = withStyles(theme => ({
  line: {
    borderColor: theme.palette.green.main,
    borderLeftWidth: 2,
    minHeight: theme.spacing(4),
  },
}))(StepConnector);

export const VerticalTimeline = ({ items }: VerticalTimelineProps) => {
  const classes = useStyles();

  return (
    <Stepper
      className={classes.stepper}
      orientation="vertical"
      connector={<VerticalTimlineStepConnector className={classes.stepConnector} />}
    >
      {items.map((item, index) => (
        <Step key={index} active={true}>
          <StepLabel
            StepIconComponent={() => item.icon}
            className={classes.stepLabel}
            classes={{ labelContainer: classes.stepLabelContainer }}
          />
          <StepContent className={classes.stepContent} classes={{ last: classes.noBorder }}>
            {item.children}
          </StepContent>
        </Step>
      ))}
    </Stepper>
  );
};
