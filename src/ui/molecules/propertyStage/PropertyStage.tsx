import React from 'react';
import { useTheme } from '@material-ui/core';

import { Scrollable, Stepper, Step, Typography } from 'ui/atoms';

import { PropertyStageProps } from './PropertyStage.types';
import * as S from './PropertyStage.styles';
import { StageIcon } from './stageIcon/StageIcon';

export const PropertyStage = ({ items, activeItem }: PropertyStageProps) => {
  const classes = S.useStyles();
  const theme = useTheme();

  return (
    <Scrollable width="100%" height={theme.spacing(10)}>
      <Stepper
        style={{ width: 100 * items.length, padding: 0 }}
        alternativeLabel
        activeStep={activeItem}
        connector={<S.Connector />}
        data-testid="property-stage"
      >
        {items.map(({ title, date }) => (
          <Step key={title} className={classes.step}>
            <S.Labels StepIconComponent={StageIcon}>
              <Typography variant="h5">{title}</Typography>
              <Typography variant="h6">{date ?? '-'}</Typography>
            </S.Labels>
          </Step>
        ))}
      </Stepper>
    </Scrollable>
  );
};
