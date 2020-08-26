import React, { useState } from 'react';

import { Card, Grid } from 'ui/atoms';
import { InfoSection } from '../../../../../ui/molecules';
import { Page } from '../../../../../ui/templates';
import { useLocale } from '../../../../../hooks';

export const CadastreInfo = () => {
  const { formatMessage } = useLocale();

  return (
    <Page
      // placeholder="pim_details.cadastre.description_placeholder"
      // name="description"
      // onSave={() => Promise.resolve(undefined)}
      // initialValues={() => {}}
      title={formatMessage({ id: 'pim_details.cadastre.title' })}
      // updatedBy={cadastreItem.lastEditedBy}
      // dateUpdated={cadastreItem.dateUpdated}
    >
      <Grid item xs={12}>
        <Card>
          <InfoSection>test</InfoSection>
        </Card>
      </Grid>
    </Page>
  );
};
