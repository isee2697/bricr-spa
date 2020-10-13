import React from 'react';
import { FormSubSectionHeader } from 'ui/molecules';
import { useLocale } from 'hooks';
import { Grid, Box } from 'ui/atoms';
import { useStyles } from 'app/pimDetails/sections/general/generalMain/GeneralMain.styles';
import { GenericField, RadioGroupField, CheckboxGroupField } from 'form/fields';
import { DetailsFormProps } from '../DetailsForm.types';
import { APARTMENT_TYPES, APARTMENT_CHARACTERISTICS } from '../dictionaries';

export const ApartmentPropertyDetailsForm = ({ editing }: DetailsFormProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <>
      <FormSubSectionHeader
        className={classes.subHeader}
        title={formatMessage({ id: 'pim_details.general.apartment_details.pick_type_of_property' })}
        subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
      />
      <div className={classes.tilesContainer}>
        <RadioGroupField
          sm={2}
          spacing={1}
          options={APARTMENT_TYPES}
          name="apartmentGeneral.propertyDetails.apartmentType"
          disabled={!editing}
        />
      </div>

      <FormSubSectionHeader
        className={classes.subHeader}
        title={formatMessage({ id: 'pim_details.general.apartment_details.characteristics' })}
        subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
      />
      <div className={classes.tilesContainer}>
        <CheckboxGroupField
          sm={2}
          options={APARTMENT_CHARACTERISTICS}
          name="apartmentGeneral.propertyDetails.characteristicsApartment"
          disabled={!editing}
        />
      </div>
      <Box mb={4} />
      <Grid item xs={12}>
        <GenericField
          name="apartmentGeneral.propertyDetails.groundfloorApartmentStartsOnFloor"
          type="number"
          label="pim_details.general.apartment_details.floor_number"
          margin="none"
          placeholder="pim_details.general.apartment_details.floor_number_placeholder"
          disabled={!editing}
        />
      </Grid>
      <Box mb={4} />
      <Grid item xs={12}>
        <GenericField
          name="apartmentGeneral.propertyDetails.amountOfTotalFloors"
          type="number"
          label="pim_details.general.apartment_details.number_of_floors"
          margin="none"
          placeholder="pim_details.general.apartment_details.number_of_floors_placeholder"
          disabled={!editing}
        />
      </Grid>
      <Box mb={2} />
      <Grid item xs={12}>
        <GenericField
          name="apartmentGeneral.propertyDetails.notes"
          label="pim_details.general.apartment_details.apartment_notes"
          placeholder="pim_details.general.apartment_details.apartment_notes_placeholder"
          disabled={!editing}
        />
      </Grid>
    </>
  );
};
