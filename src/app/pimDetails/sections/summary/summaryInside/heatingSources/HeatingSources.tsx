import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Box, Card, CardContent, CardHeader, Typography } from 'ui/atoms';
import { Counter } from 'ui/molecules/counter/Counter';
import { FormSubSection } from 'ui/organisms';

import { useStyles } from './HeatingSources.styles';
import { HeatingSourcesProps } from './HeatingSources.types';

export const HeatingSources = ({ heatingSources }: HeatingSourcesProps) => {
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
            <Counter count={heatingSources.length} hasMarginLeft />
          </Box>
        }
      />
      <CardContent>
        {heatingSources.map((heatingSource, index) => (
          <FormSubSection
            key={index}
            title={
              <>
                <Typography variant="h4" className={classes.index}>
                  {index}
                </Typography>
                <Typography variant="h3">
                  {formatMessage({ id: `dictionaries.heating_source_type.${heatingSource.configuration.type}` })}
                </Typography>
              </>
            }
            onOptionsClick={() => {}}
          >
            <>
              <Box className={classes.detailItem}>
                <Typography variant="h5" className={classes.detailItemLabel}>
                  {formatMessage({ id: 'pim_details.summary.inside.heating_source.name' })}
                </Typography>
                <Typography variant="h4" className={classes.detailItemValue}>
                  {heatingSource.name}
                </Typography>
              </Box>
              <Box className={classes.detailItem}>
                <Typography variant="h5" className={classes.detailItemLabel}>
                  {formatMessage({ id: 'pim_details.summary.inside.heating_source.year_of_installation' })}
                </Typography>
                <Typography variant="h4" className={classes.detailItemValue}>
                  {heatingSource.yearOfInstallation}
                </Typography>
              </Box>
            </>
          </FormSubSection>
        ))}
      </CardContent>
    </Card>
  );
};
