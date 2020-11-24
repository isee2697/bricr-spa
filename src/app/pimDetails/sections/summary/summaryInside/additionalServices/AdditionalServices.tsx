import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Box, Card, CardContent, CardHeader, Typography } from 'ui/atoms';
import { Counter } from 'ui/molecules/counter/Counter';
import { FormSubSection } from 'ui/organisms';

import { useStyles } from './AdditionalServices.styles';
import { AdditionalServicesProps } from './AdditionalServices.types';

export const AdditionalServices = ({ additionalServices }: AdditionalServicesProps) => {
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
            <Counter count={additionalServices.length} hasMarginLeft />
          </Box>
        }
      />
      <CardContent>
        {additionalServices.map((additionalService, index) => (
          <FormSubSection
            key={index}
            title={
              <>
                <Typography variant="h4" className={classes.index}>
                  {index}
                </Typography>
                <Typography variant="h3">
                  {formatMessage({
                    id: `dictionaries.additional_service_type.${additionalService.configuration.type}`,
                  })}
                </Typography>
              </>
            }
            onOptionsClick={() => {}}
          >
            <>
              <Box className={classes.detailItem}>
                <Typography variant="h5" className={classes.detailItemLabel}>
                  {formatMessage({ id: 'pim_details.summary.inside.additional_service.name' })}
                </Typography>
                <Typography variant="h4" className={classes.detailItemValue}>
                  {additionalService.name}
                </Typography>
              </Box>
              <Box className={classes.detailItem}>
                <Typography variant="h5" className={classes.detailItemLabel}>
                  {formatMessage({ id: 'pim_details.summary.inside.additional_service.year_of_installation' })}
                </Typography>
                <Typography variant="h4" className={classes.detailItemValue}>
                  {additionalService.yearOfInstallation}
                </Typography>
              </Box>
            </>
          </FormSubSection>
        ))}
      </CardContent>
    </Card>
  );
};
