import React from 'react';

import { Page } from 'ui/templates';
import { Grid } from 'ui/atoms';
import { useLocale } from 'hooks';
import { ServiceType } from 'api/types';

import { ServiceList } from './serviceList/ServiceList';
import { ServicesProps } from './Services.types';

export const Services = ({ ncpServices, onSave, onDescriptionUpdate }: ServicesProps) => {
  const { formatMessage } = useLocale();

  return (
    <Page
      title={formatMessage({ id: 'pim_details.services.title' })}
      placeholder="pim_details.services.description_placeholder"
      name="description"
      onSave={onDescriptionUpdate}
      initialValues={{ description: ncpServices.description }}
      dateUpdated={ncpServices.dateUpdated}
      updatedBy={ncpServices.lastEditedBy}
    >
      <Grid xs={12} item>
        <ServiceList
          emptyEmoji="🚿"
          title="pim_details.services.hot_water"
          items={ncpServices.hotWaterSupplies || []}
          type={ServiceType.HotWaterSupplies}
          onSave={onSave}
        />
      </Grid>
      <Grid xs={12} item>
        <ServiceList
          emptyEmoji="🔥"
          title="pim_details.services.heating"
          items={ncpServices.heatingSources || []}
          type={ServiceType.HeatingSources}
          onSave={onSave}
        />
      </Grid>
      <Grid xs={12} item>
        <ServiceList
          emptyEmoji="🤔"
          title="pim_details.services.additional"
          items={ncpServices.additionalServices || []}
          type={ServiceType.AdditionalServices}
          onSave={onSave}
        />
      </Grid>
    </Page>
  );
};
