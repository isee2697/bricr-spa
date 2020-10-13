import React from 'react';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Box, Card, CardContent, CardHeader, Typography } from 'ui/atoms';
import { Counter } from 'ui/molecules/counter/Counter';
import { FormSubSection } from 'ui/organisms';

import { useStyles } from './HeatingSources.styles';
import { HeatingSourcesProps } from './HeatingSources.types';

export const HeatingSources = ({}: HeatingSourcesProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Box display="flex" alignItems="center">
            <Typography variant="h2">
              {formatMessage({ id: 'pim_details.summary.inside.heating_sources.title' })}
            </Typography>
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
              <Typography variant="h3">Boiler 1</Typography>
            </>
          }
          onOptionsClick={() => {}}
        >
          <div>Boiler 1 content</div>
        </FormSubSection>
        <FormSubSection
          initiallyOpened={false}
          title={
            <>
              <Typography variant="h4" className={classes.index}>
                1
              </Typography>
              <Typography variant="h3">Boiler 2</Typography>
            </>
          }
          onOptionsClick={() => {}}
        >
          <div>Boiler 2 content</div>
        </FormSubSection>
      </CardContent>
    </Card>
  );
};
