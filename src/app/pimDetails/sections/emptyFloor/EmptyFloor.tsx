import React from 'react';
import { Form } from 'react-final-form';

import { Grid, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { InfoSection } from 'ui/molecules';
import { FormSection } from 'ui/organisms';
import { AppMessages } from 'i18n/messages';
import { GenericField } from 'form/fields';

import { ErrorFloorProps } from './EmptyFloor.types';
import { useStyles } from './EmptyFloor.styles';

export const EmptyFloor = ({ title, description, onClick }: ErrorFloorProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <>
      <Grid container xs={12} item justify="space-between">
        <Typography variant="h1">{title}</Typography>
        <Form
          onSubmit={() => {}}
          render={({ handleSubmit, invalid, pristine }) => (
            <form onSubmit={handleSubmit} className={classes.description}>
              <GenericField
                placeholder="pim_details.inside.floor.description_placeholder"
                name="description"
                value={description}
              />
            </form>
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <FormSection title={title} onAdd={onClick} isEditable={false}>
          {() => (
            <InfoSection emoji="🤔" className={classes.content}>
              <Typography variant="h3">
                {formatMessage({ id: AppMessages['pim_details.empty_floor.title'] })}
              </Typography>
              <Typography variant="h3">
                {formatMessage({ id: AppMessages['pim_details.empty_floor.description'] })}
              </Typography>
            </InfoSection>
          )}
        </FormSection>
      </Grid>
    </>
  );
};
