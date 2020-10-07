import React from 'react';
import { FormSubSectionHeader } from 'ui/molecules';
import { useLocale } from 'hooks';
import { useStyles } from 'app/pimDetails/sections/general/generalMain/GeneralMain.styles';
import { GenericField, RadioGroupField } from 'form/fields';
import { Grid, Box } from 'ui/atoms';
import { DetailsFormProps } from '../DetailsForm.types';
import { BOG_CHARACTERISTICS, BOG_TYPES } from '../dictionaries';

export const BogPropertyDetailsForm = ({ editing }: DetailsFormProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <>
      <FormSubSectionHeader
        className={classes.subHeader}
        title={formatMessage({ id: 'pim_details.general.bog_details.bog_type' })}
        subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
      />
      <RadioGroupField sm={3} options={BOG_TYPES} name="bogGeneral.type" disabled={!editing} />

      <FormSubSectionHeader
        className={classes.subHeader}
        title={formatMessage({ id: 'pim_details.general.bog_details.bog_characteristics' })}
        subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
      />
      <Box mb={3} />
      <RadioGroupField sm={2} options={BOG_CHARACTERISTICS} name="bogGeneral.characteristics" disabled={!editing} />
      <Box mb={3} />
      <Grid item xs={6}>
        <GenericField
          name="bogGeneral.startsOnFloor"
          type="number"
          label="pim_details.general.bog_details.ground_floor"
          placeholder="pim_details.general.bog_details.ground_floor_placeholder"
          disabled={!editing}
        />
        <GenericField
          name="bogGeneral.totalFloors"
          type="number"
          label="pim_details.general.bog_details.number_of_floors"
          placeholder="pim_details.general.bog_details.number_of_floors_placeholder"
          disabled={!editing}
        />
      </Grid>
      <GenericField
        name="bogGeneral.notes"
        label="pim_details.general.bog_details.bog_characteristics_notes"
        placeholder="pim_details.general.bog_details.bog_characteristics_notes_placeholder"
        disabled={!editing}
      />
    </>
  );
};
