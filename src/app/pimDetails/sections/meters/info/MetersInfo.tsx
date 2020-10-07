import React from 'react';
import { Page } from 'ui/templates';
import { InfoSection } from 'ui/molecules';
import { Card, Grid, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';

import { MeterInfoProps } from './MetersInfo.types';

export const MetersInfo = ({ hasMeters, description, onSave }: MeterInfoProps) => {
  const { formatMessage } = useLocale();

  return (
    <Page
      title={formatMessage({ id: 'pim_details.meters.title' })}
      name="description"
      placeholder="pim_details.meters.description_placeholder"
      initialValues={{ description }}
      onSave={onSave}
    >
      <Grid item xs={12}>
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
