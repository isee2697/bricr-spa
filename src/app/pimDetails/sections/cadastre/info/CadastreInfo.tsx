import React from 'react';
import { Card, Grid, Typography } from 'ui/atoms';
import { InfoSection } from 'ui/molecules';
import { Page } from '../../../../../ui/templates';
import { useLocale } from 'hooks';

import { CadastreInfoProps } from './CadastreInfo.types';

export const CadastreInfo = ({ onSave, cadastreItem, hasPlots }: CadastreInfoProps) => {
  const { formatMessage } = useLocale();
  const title = hasPlots ? 'pim_details.cadastre.has_plots_title' : 'pim_details.cadastre.has_no_plots_title';
  const description = hasPlots
    ? 'pim_details.cadastre.has_plots_description'
    : 'pim_details.cadastre.has_no_plots_description';

  return (
    <Page
      placeholder="pim_details.cadastre.description_placeholder"
      name="description"
      onSave={onSave}
      initialValues={cadastreItem}
      title={formatMessage({ id: 'pim_details.cadastre.title' })}
      updatedBy={cadastreItem.lastEditedBy}
      dateUpdated={cadastreItem.dateUpdated}
    >
      <Grid item xs={12}>
        <Card>
          <InfoSection emoji={hasPlots ? '🏕️' : '🤷'}>
            <Typography>{formatMessage({ id: title })}</Typography>
            <Typography>{formatMessage({ id: description })}</Typography>
          </InfoSection>
        </Card>
      </Grid>
    </Page>
  );
};
