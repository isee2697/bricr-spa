import React from 'react';

import { InfoSection } from 'ui/molecules';
import { useLocale } from 'hooks';
import { Card, Grid, Box, Typography } from 'ui/atoms';
import { AutosaveForm } from 'ui/organisms';
import { GenericField } from 'form/fields';
import { CommercialSpacesInformationProps } from '../CommercialSpaces.types';

export const CommercialSpacesInformation = ({ data, onSave }: CommercialSpacesInformationProps) => {
  const { formatMessage } = useLocale();

  const mainLine =
    data.getPimInside.bogSpaces !== null
      ? 'pim_details.commercial_spaces.explanation_title'
      : 'pim_details.commercial_spaces.empty_title';
  const subLine =
    data.getPimInside.bogSpaces !== null
      ? 'pim_details.commercial_spaces.explanation_description'
      : 'pim_details.commercial_spaces.empty_description';

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h1">{formatMessage({ id: 'pim_details.commercial_spaces.title' })}</Typography>

        <AutosaveForm initialValues={data} onSave={onSave}>
          <GenericField name="description" placeholder={'pim_details.commercial_spaces.description_placeholder'} />
        </AutosaveForm>
      </Grid>
      <Grid item xs={12}>
        <Box mb={1} />
        <Card>
          <InfoSection emoji={data.getPimInside.bogSpaces !== null ? '🏢' : '🚧'}>
            <Typography variant="h3">{formatMessage({ id: mainLine })}</Typography>
            <Typography variant="h3">{formatMessage({ id: subLine })}</Typography>
          </InfoSection>
        </Card>
      </Grid>
    </>
  );
};
