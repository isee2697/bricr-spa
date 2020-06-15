import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import { ServicesMetersProps } from '../Services.types';
import { Box } from 'ui/atoms';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { GenericField } from 'form/fields';

import { useStyles } from './Meters.styles';
import { ReadingsContainer } from './readings/ReadingsContainer';

export const Meters = ({ title, onSave, onAddReading, linkedPerson, meters }: ServicesMetersProps) => {
  const classes = useStyles();

  return (
    <>
      <Grid xs={12} item>
        <Typography variant="h1">{title}</Typography>
        <Box mb={4} className={classes.meter}>
          {meters.map(meter => (
            <div key={meter.id} className={classes.spacing}>
              <FormSection title={meter.name} onAdd={() => onAddReading(meter.id)} onOptionsClick={() => {}}>
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
                    <ReadingsContainer linkedPerson={linkedPerson} editing={editing} readings={meter.readings || []} />
                  </>
                )}
              </FormSection>
            </div>
          ))}
        </Box>
      </Grid>
    </>
  );
};
