import React from 'react';

import { Grid, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { Box } from 'ui/atoms';
import { LinkedPropertyItem, InfoSection } from 'ui/molecules';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { Page } from 'ui/templates';

import { LinkedPropertyProps } from './LinkedProperty.types';

export const LinkedProperty = ({ properties }: LinkedPropertyProps) => {
  const { formatMessage } = useLocale();

  return (
    <AutosaveForm onSave={() => Promise.resolve({ error: false })}>
      <Page
        title={formatMessage({ id: 'pim_details.specification.linked_properties.title' })}
        placeholder="pim_details.specification.linked_properties.description_placeholder"
        name="specification.linked_properties.description"
      >
        <Grid xs={12} item>
          <Box mt={1}>
            <FormSection
              title={formatMessage({ id: 'pim_details.specification.linked_properties.title' })}
              isExpandable
              isInitExpanded
            >
              {!properties.length && (
                <InfoSection emoji="🤔">
                  <Typography variant="h3">
                    {formatMessage({ id: 'pim_details.specification.linked_properties.empty_description_1' })}
                  </Typography>
                  <Typography variant="h3">
                    {formatMessage({ id: 'pim_details.specification.linked_properties.empty_description_2' })}
                  </Typography>
                </InfoSection>
              )}
              {properties.map(property => {
                const address = `${property.houseNumber} ${property.city} ${property.postalCode} `;

                return (
                  <Box key={property.id} mb={1}>
                    <LinkedPropertyItem
                      title={address}
                      image="https://source.unsplash.com/featured/?building"
                      address={address}
                      project=""
                      price=""
                      owner=""
                      accManager=""
                      status={property.status}
                      plotNumber=""
                      pimAttention=""
                      onEditClick={() => {}}
                    />
                  </Box>
                );
              })}
            </FormSection>
          </Box>
        </Grid>
      </Page>
    </AutosaveForm>
  );
};
