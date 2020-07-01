import React, { useRef } from 'react';
import { Grid, Typography } from '@material-ui/core';

import { ServicesMetersProps } from '../Services.types';
import { Box } from 'ui/atoms';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { GenericField } from 'form/fields';
import { FormSectionRef } from 'ui/organisms/formSection/FormSection.types';

import { useStyles } from './Meters.styles';
import { ReadingsContainer } from './readings/ReadingsContainer';

export const Meters = ({
  title,
  onSave,
  onAddReading,
  linkedPerson,
  meters,
  loading,
  isMeterAdded,
}: ServicesMetersProps) => {
  const classes = useStyles();
  const formRefs = useRef<{ [key: string]: FormSectionRef }>({});

  const handleOnAddReading = (id: string) => {
    onAddReading(id);
    formRefs?.current[id].handleSetEdit(true);
  };

  return (
    <Grid xs={12} item>
      <Typography variant="h1">{title}</Typography>
      <Box mb={4} className={classes.meter}>
        {meters.map((meter, index) => (
          <div key={meter.id} className={classes.spacing}>
            <FormSection
              title={meter.name}
              onAdd={() => handleOnAddReading(meter.id)}
              onOptionsClick={() => {}}
              isInitEditing={isMeterAdded}
              loading={loading}
              ref={ref => {
                if (ref) {
                  formRefs.current[meter.id] = ref;
                }
              }}
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
          </div>
        ))}
      </Box>
    </Grid>
  );
};
