import React, { useState } from 'react';
import arrayMutators from 'final-form-arrays';

import { useStyles } from 'app/pimDetails/sections/inside/floor/space/Space.styles';
import { Box, Collapse, Grid } from 'ui/atoms';
import { SubSectionHeader } from 'ui/molecules';
import { AutosaveForm } from 'ui/organisms';

import { FormProps } from './Form.types';

export const Form = ({ title, children, initialValues, onSave }: FormProps) => {
  const classes = useStyles();

  const [isToggled, setToggled] = useState(false);

  return (
    <AutosaveForm initialValues={initialValues} onSave={onSave} mutators={{ ...arrayMutators }} subscription={{}}>
      <Box className={classes.container}>
        <SubSectionHeader
          toggled={isToggled}
          onToggleClick={() => {
            setToggled(t => !t);
          }}
          onOptionsClick={() => {}}
        >
          {title}
        </SubSectionHeader>

        <Collapse style={{ width: '100%' }} in={isToggled} timeout="auto" unmountOnExit>
          <Grid container spacing={4}>
            {children}
          </Grid>
        </Collapse>
      </Box>
    </AutosaveForm>
  );
};
