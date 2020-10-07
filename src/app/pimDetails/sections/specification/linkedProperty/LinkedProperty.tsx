import React, { useState } from 'react';
import { Grid, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { Box } from 'ui/atoms';
import { LinkedPropertyItem, InfoSection } from 'ui/molecules';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { AddLinkedPropertyModalContainer } from '../addLinkedPropertyModal/AddLinkedPropertyModalContainer';
import { Page } from 'ui/templates';

import { LinkedPropertyProps } from './LinkedProperty.types';

export const LinkedProperty = ({
  properties,
  dateUpdated,
  updatedBy,
  description,
  onDescriptionUpdate,
}: LinkedPropertyProps) => {
  const { formatMessage } = useLocale();
  const [isLinkedPropertyModalOpen, setLinkedPropertyModalOpen] = useState(false);

  return (
    <>
      <AutosaveForm onSave={() => Promise.resolve({ error: false })}>
        <Page
          title={formatMessage({
            id: 'pim_details.specification.linked_properties.title',
          })}
          placeholder="pim_details.specification.linked_properties.description_placeholder"
          name="description"
          initialValues={{ description }}
          onSave={onDescriptionUpdate}
          dateUpdated={dateUpdated}
          updatedBy={updatedBy}
        >
          <Grid xs={12} item>
            <Box mt={1}>
              <FormSection
                title={formatMessage({
                  id: 'pim_details.specification.linked_properties.title',
                })}
                isEditable={false}
                onAdd={() => setLinkedPropertyModalOpen(v => !v)}
              >
                {!properties?.length && (
                  <InfoSection emoji="🤔">
                    <Typography variant="h3">
                      {formatMessage({
                        id: 'pim_details.specification.linked_properties.empty_description_1',
                      })}
                    </Typography>
                    <Typography variant="h3">
                      {formatMessage({
                        id: 'pim_details.specification.linked_properties.empty_description_2',
                      })}
                    </Typography>
                  </InfoSection>
                )}
                {!!properties?.length &&
                  properties.map(property => {
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
                          onEditClick={() => setLinkedPropertyModalOpen(v => !v)}
                        />
                      </Box>
                    );
                  })}
              </FormSection>
            </Box>
          </Grid>
        </Page>
      </AutosaveForm>
      <AddLinkedPropertyModalContainer
        isOpened={isLinkedPropertyModalOpen}
        onClose={() => setLinkedPropertyModalOpen(false)}
      />
    </>
  );
};
