import React from 'react';

import { ProjectDetailsHeader } from 'app/projectDetails/projectDetailsHeader/ProjectDetailsHeader';
import { Page } from 'ui/templates';
import { Box, Grid } from 'ui/atoms';
import { useLocale } from 'hooks';
import { ServiceType } from 'api/types';
import { PIM_SERVICES } from 'api/mocks/pim';

import { ServiceList } from './serviceList/ServiceList';
import { ServicesProps } from './Services.types';

export const Services = ({ onSave }: ServicesProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <ProjectDetailsHeader />
      <Page
        name="description"
        placeholder="project_details.services.description_placeholder"
        title={formatMessage({ id: 'project_details.services.title' })}
      >
        <Grid item xs={12}>
          <ServiceList
            emptyEmoji="🚿"
            title="pim_details.services.hot_water"
            items={[]}
            type={ServiceType.HotWaterSupplies}
            onSave={onSave}
          />
          <Box mb={3} />
          <ServiceList
            emptyEmoji="🔥"
            title="pim_details.services.heating"
            items={[]}
            type={ServiceType.HeatingSources}
            onSave={onSave}
          />
          <Box mb={3} />
          <ServiceList
            emptyEmoji="🤔"
            title="pim_details.services.additional"
            items={PIM_SERVICES.additionalServices || []}
            type={ServiceType.AdditionalServices}
            onSave={onSave}
          />
        </Grid>
      </Page>
    </>
  );
};
