import React from 'react';

import { Grid } from 'ui/atoms';
import { useLocale } from 'hooks';
import { ServiceType } from 'api/types';
import { Page } from 'ui/templates';

import { ServiceTypeList } from './serviceTypeList/ServiceTypeList';
import { ServicesProps } from './Services.types';

export const Services = ({ pimServices, onSave }: ServicesProps) => {
  const { formatMessage } = useLocale();

  return (
    <Page
      title={formatMessage({ id: 'pim_details.services.title' })}
      placeholder="pim_details.services.description_placeholder"
      name="pim_details.services.description"
      onSave={() => Promise.resolve({ error: false })}
      dateUpdated={pimServices.dateUpdated}
      updatedBy={pimServices.lastEditedBy}
    >
      <Grid xs={12} item>
        <ServiceTypeList
          emptyEmoji="🚿"
          title="pim_details.services.hot_water"
          items={pimServices.hotWaterSupplies || []}
          type={ServiceType.HotWaterSupplies}
          onSave={onSave}
        />
      </Grid>
      <Grid xs={12} item>
        <ServiceTypeList
          emptyEmoji="🔥"
          title="pim_details.services.heating"
          items={pimServices.heatingSources || []}
          type={ServiceType.HeatingSources}
          onSave={onSave}
        />
      </Grid>
      <Grid xs={12} item>
        <ServiceTypeList
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
