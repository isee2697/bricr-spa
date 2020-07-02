import React from 'react';

import { useStyles } from 'app/pimDetails/sections/inside/floor/space/Space.styles';
import { Box, Grid } from 'ui/atoms';
import { AutosaveForm, FormSubSection } from 'ui/organisms';

import { FormProps } from './Form.types';

export const Form = <T extends unknown>({
  title,
  children,
  initialValues,
  onSave,
  isInitiallyOpened = false,
  counter,
}: FormProps<T>) => {
  const classes = useStyles();

  return (
    <AutosaveForm initialValues={initialValues} onSave={onSave}>
      <Box className={classes.container}>
        <FormSubSection counter={counter} title={title} initiallyOpened={isInitiallyOpened} onOptionsClick={() => {}}>
          <Grid container spacing={4}>
            {children}
          </Grid>
        </FormSubSection>
      </Box>
    </AutosaveForm>
  );
};
