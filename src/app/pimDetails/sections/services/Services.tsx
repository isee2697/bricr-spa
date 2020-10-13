import React from 'react';
import { Grid } from 'ui/atoms';
import { useLocale } from 'hooks';
import { ServiceType } from 'api/types';
import { Page } from 'ui/templates';
import { ServiceList } from 'app/shared/services/general/serviceList/ServiceList';

import { ServicesProps } from './Services.types';

export const Services = ({ pimServices, onSave, onDescriptionUpdate }: ServicesProps) => {
  const { formatMessage } = useLocale();

  return (
    <Page
      title={formatMessage({ id: 'pim_details.services.title' })}
      placeholder="pim_details.services.description_placeholder"
      name="description"
      onSave={onDescriptionUpdate}
      initialValues={{ description: pimServices.description }}
      dateUpdated={pimServices.dateUpdated}
      updatedBy={pimServices.lastEditedBy}
    >
      <Grid xs={12} item>
        <ServiceList
          emptyEmoji="🚿"
          title="pim_details.services.hot_water"
          items={pimServices.hotWaterSupplies || []}
          type={ServiceType.HotWaterSupplies}
          onSave={onSave}
        />
      </Grid>
      <Grid xs={12} item>
        <ServiceList
          emptyEmoji="🔥"
          title="pim_details.services.heating"
          items={pimServices.heatingSources || []}
          type={ServiceType.HeatingSources}
          onSave={onSave}
        />
      </Grid>
      <Grid xs={12} item>
        <ServiceList
          emptyEmoji="🤔"
          title="pim_details.services.additional"
          items={pimServices.additionalServices || []}
          type={ServiceType.AdditionalServices}
          onSave={onSave}
        />
      </Grid>
    </Page>
  );
};
