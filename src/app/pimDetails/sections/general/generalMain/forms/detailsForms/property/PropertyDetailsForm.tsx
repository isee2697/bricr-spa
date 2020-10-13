import React from 'react';
import { FormSubSectionHeader } from 'ui/molecules';
import { useLocale } from 'hooks';
import { useStyles } from 'app/pimDetails/sections/general/generalMain/GeneralMain.styles';
import { RadioGroupField } from 'form/fields';
import { DetailsFormProps } from '../DetailsForm.types';
import { HOUSE_TYPES, HOUSE_CONNECTIONS } from '../dictionaries';

export const PropertyDetailsForm = ({ editing }: DetailsFormProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <>
      <FormSubSectionHeader
        className={classes.subHeader}
        title={formatMessage({ id: 'pim_details.general.property_details.pick_type_of_property' })}
        subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
      />
      <div className={classes.tilesContainer}>
        <RadioGroupField
          sm={2}
          spacing={1}
          options={HOUSE_TYPES}
          name="houseGeneral.propertyDetails"
          disabled={!editing}
        />
      </div>

      <FormSubSectionHeader
        className={classes.subHeader}
        title={formatMessage({ id: 'pim_details.general.property_details.property_connection' })}
        subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
      />
      <div className={classes.tilesContainer}>
        <RadioGroupField
          sm={2}
          spacing={1}
          options={HOUSE_CONNECTIONS}
          name="houseGeneral.propertyConnection"
          disabled={!editing}
        />
      </div>
    </>
  );
};
