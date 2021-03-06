import React, { useRef } from 'react';
import { Grid } from '@material-ui/core';

import { Page } from 'ui/templates';
import { ServicesMetersProps } from '../../services/Services.types';
import { Box } from 'ui/atoms';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { GenericField } from 'form/fields';
import { FormSectionRef } from 'ui/organisms/formSection/FormSection.types';
import { useLocale } from 'hooks';
import { useStyles } from '../Meters.styles';

import { ReadingsContainer } from './readings/ReadingsContainer';

export const MetersType = ({
  title,
  onSave,
  onAddReading,
  linkedPerson,
  meters,
  metersMeta,
  onDescriptionUpdate,
  loading,
  isMeterAdded,
}: ServicesMetersProps) => {
  const classes = useStyles();
  const formRefs = useRef<{ [key: string]: FormSectionRef }>({});
  const { formatMessage } = useLocale();

  const handleOnAddReading = (id: string) => {
    onAddReading(id);
    formRefs?.current[id].handleSetEdit(true);
  };

  return (
    <Page
      title={title}
      placeholder="pim_details.meters.description_placeholder"
      name="description"
      onSave={onDescriptionUpdate}
      initialValues={{ description: metersMeta.description }}
      dateUpdated={metersMeta.dateUpdated}
      updatedBy={metersMeta.lastEditedBy}
      key={title}
    >
      <Grid xs={12} item>
        {meters.map((meter, index) => (
          <FormSection
            key={meter.id}
            title={
              meter.name
                ? meter.name
                : `(${formatMessage({
                    id: 'pim_details.general.identification_number.identification_numbers_name_placeholder',
                  })})`
            }
            onAdd={() => handleOnAddReading(meter.id)}
            onOptionsClick={() => {}}
            isInitEditing={isMeterAdded}
            loading={loading}
            ref={ref => {
              if (ref) {
                formRefs.current[meter.id] = ref;
              }
            }}
            className={classes.formContainer}
          >
            {editing => (
              <>
                <AutosaveForm key={meter.id} initialValues={meter} onSave={onSave} subscription={{}}>
                  <GenericField
                    disabled={!editing}
                    placeholder="pim_details.services.name"
                    name="name"
                    label="pim_details.services.name"
                  />
                  <GenericField
                    label="pim_details.services.description"
                    disabled={!editing}
                    placeholder="pim_details.services.description"
                    name="description"
                  />
                  <Box mb={2}></Box>
                </AutosaveForm>
                <ReadingsContainer
                  isMeterAdded={meters.length === index + 1 && isMeterAdded}
                  linkedPerson={linkedPerson}
                  editing={editing}
                  readings={meter.readings || []}
                />
              </>
            )}
          </FormSection>
        ))}
      </Grid>
    </Page>
  );
};
