import React from 'react';

import { Card, CardHeader, CardContent, Typography, Box } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Counter } from 'ui/molecules/counter/Counter';
import { FormSubSection } from 'ui/organisms';

import { useStyles } from './Pollution.styles';
import { PollutionProps } from './Pollution.types';

export const Pollution = ({ pollutions }: PollutionProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Box display="flex" alignItems="center">
            <Typography variant="h2">{formatMessage({ id: 'pim_details.summary.pollution.title' })}</Typography>
            <Counter count={pollutions.length} hasMarginLeft />
          </Box>
        }
      />
      <CardContent>
        {pollutions.map((pollution, index) => (
          <FormSubSection
            initiallyOpened={false}
            title={
              <>
                <Typography variant="h4" className={classes.index}>
                  {index + 1}
                </Typography>
                <Typography variant="h3">{pollution.type}</Typography>
              </>
            }
            onOptionsClick={() => {}}
          >
            <Box className={classes.detailItem}>
              <Typography variant="h5" className={classes.detailItemLabel}>
                {formatMessage({ id: 'pim_details.summary.pollution.inspection' })}
              </Typography>
              <Typography variant="h4" className={classes.detailItemValue}>
                {pollution.description}
              </Typography>
            </Box>
          </FormSubSection>
        ))}
      </CardContent>
    </Card>
  );
};
