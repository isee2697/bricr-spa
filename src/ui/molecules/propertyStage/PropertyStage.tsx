import { useTheme } from '@material-ui/core/styles';
import React from 'react';

import { Scrollable, Stepper, Step, Typography } from 'ui/atoms';

import { PropertyStageProps } from './PropertyStage.types';
import * as S from './PropertyStage.styles';
import { StageIcon } from './stageIcon/StageIcon';

export const PropertyStage = ({ items, activeItem, baseSize = 100, height }: PropertyStageProps) => {
  const classes = S.useStyles();
  const theme = useTheme();

  if (!height) {
    height = theme.spacing(10);
  }

  return (
    <Scrollable width="100%" height={height}>
      <Stepper
        style={{ width: baseSize * items.length, padding: 0 }}
        alternativeLabel
        activeStep={activeItem}
        connector={<S.Connector style={{ width: baseSize, left: -baseSize }} />}
        data-testid="property-stage"
        className={classes.stepper}
      >
        {items.map(({ title, date, text }) => (
          <Step key={title} className={classes.step}>
            <S.Labels StepIconComponent={StageIcon}>
              <Typography variant="h5">{title}</Typography>
              {text ? (
                <Typography variant="h6">{text}</Typography>
              ) : (
                <Typography variant="h6">{date ?? '-'}</Typography>
              )}
            </S.Labels>
          </Step>
        ))}
      </Stepper>
    </Scrollable>
  );
};
