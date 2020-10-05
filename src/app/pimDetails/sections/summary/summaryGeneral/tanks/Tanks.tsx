import React from 'react';

import { Card, CardHeader, CardContent, Box, Typography } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Counter } from 'ui/molecules/counter/Counter';
import { FormSubSection } from 'ui/organisms';

import { useStyles } from './Tanks.styles';

export const Tanks = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Box display="flex" alignItems="center">
            <Typography variant="h2">{formatMessage({ id: 'pim_details.summary.tanks.title' })}</Typography>
            <Counter count={5} hasMarginLeft />
          </Box>
        }
      />
      <CardContent>
        <FormSubSection
          initiallyOpened={false}
          title={
            <>
              <Typography variant="h4" className={classes.index}>
                1
              </Typography>
              <Typography variant="h3">Oil tank</Typography>
            </>
          }
          onOptionsClick={() => {}}
        >
          <div>Oil tank content</div>
        </FormSubSection>
        <FormSubSection
          initiallyOpened={false}
          title={
            <>
              <Typography variant="h4" className={classes.index}>
                1
              </Typography>
              <Typography variant="h3">Underground tank</Typography>
            </>
          }
          onOptionsClick={() => {}}
        >
          <div>Underground tank content</div>
        </FormSubSection>
      </CardContent>
    </Card>
  );
};
