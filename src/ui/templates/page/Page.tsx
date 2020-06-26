import React from 'react';

import { Box, Grid, LastUpdated, Typography } from 'ui/atoms';
import { HelpIcon, MenuIcon } from 'ui/atoms/icons';
import { GenericField } from 'form/fields';
import { AutosaveForm } from 'ui/organisms';
import { useStyles } from 'ui/templates/page/Page.styles';

import { PageProps } from './Page.types';

export const Page = ({
  children,
  title,
  onSave,
  name,
  placeholder,
  initialValues,
  dateUpdated,
  updatedBy,
  withoutHeader,
  afterTitle,
}: PageProps) => {
  const classes = useStyles();

  const field = <GenericField placeholder={placeholder} name={name ?? ''} id={name} className={classes.inputField} />;

  const autosaveForm = onSave ? (
    <AutosaveForm onSave={onSave} initialValues={initialValues ?? {}}>
      {field}
    </AutosaveForm>
  ) : (
    field
  );

  return (
    <Grid container className={classes.container}>
      {!withoutHeader && (
        <>
          <Grid item xs={12} className={classes.titleContainer}>
            <Box display="flex" alignItems="center">
              <Typography variant="h1" className={classes.title}>
                {title}
              </Typography>
              {afterTitle}
              <Box className={classes.buttons}>
                <HelpIcon />
                <MenuIcon />
              </Box>
            </Box>
          </Grid>
          {autosaveForm}
        </>
      )}
      <Grid container item xs={12} className={classes.childContainer}>
        {children}
      </Grid>
      <Grid item xs={12} className={classes.lastUpdated}>
        <LastUpdated dateUpdated={dateUpdated} updatedBy={updatedBy} withIcon />
      </Grid>
    </Grid>
  );
};
