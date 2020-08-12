import React from 'react';

import { Page } from 'ui/templates';
import { InfoSection } from 'ui/molecules';
import { Card, Grid, Box, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';

export const MetersInfo = ({ hasMeters }: { hasMeters: boolean }) => {
  const { formatMessage } = useLocale();

  return (
    <Page title={'meters'}>
      <Grid item xs={12}>
        <Box mb={3} />
        <Card>
          <InfoSection emoji={hasMeters ? '📟' : '🚪'}>
            <Typography>
              {hasMeters
                ? formatMessage({ id: 'pim_details.meters.info_title' })
                : formatMessage({ id: 'pim_details.meters.empty_title' })}
            </Typography>
            <Typography>
              {hasMeters
                ? formatMessage({ id: 'pim_details.meters.info_description' })
                : formatMessage({ id: 'pim_details.meters.empty_description' })}
            </Typography>
          </InfoSection>
        </Card>
      </Grid>
    </Page>
  );
};
