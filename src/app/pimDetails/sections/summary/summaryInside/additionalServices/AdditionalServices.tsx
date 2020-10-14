import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Box, Card, CardContent, CardHeader, Typography } from 'ui/atoms';
import { Counter } from 'ui/molecules/counter/Counter';
import { FormSubSection } from 'ui/organisms';

import { useStyles } from './AdditionalServices.styles';
import { AdditionalServicesProps } from './AdditionalServices.types';

export const AdditionalServices = ({}: AdditionalServicesProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Box display="flex" alignItems="center">
            <Typography variant="h2">
              {formatMessage({ id: 'pim_details.summary.inside.additional_services.title' })}
            </Typography>
            <Counter count={2} hasMarginLeft />
          </Box>
        }
      />
      <CardContent>
        <FormSubSection
          title={
            <>
              <Typography variant="h4" className={classes.index}>
                1
              </Typography>
              <Typography variant="h3">Air conditioning</Typography>
            </>
          }
          onOptionsClick={() => {}}
        >
          <Box className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.inside.additional_services.name' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              Ericson
            </Typography>
          </Box>
          <Box className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.inside.additional_services.year_of_installation' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              1991
            </Typography>
          </Box>
        </FormSubSection>
        <FormSubSection
          initiallyOpened={false}
          title={
            <>
              <Typography variant="h4" className={classes.index}>
                1
              </Typography>
              <Typography variant="h3">Alarm system</Typography>
            </>
          }
          onOptionsClick={() => {}}
        >
          <Box className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.inside.additional_services.name' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              Ericson
            </Typography>
          </Box>
          <Box className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.inside.additional_services.year_of_installation' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              1991
            </Typography>
          </Box>
        </FormSubSection>
      </CardContent>
    </Card>
  );
};
